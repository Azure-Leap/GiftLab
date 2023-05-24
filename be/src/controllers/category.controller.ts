import { RequestHandler } from "express";
import fs from "fs";

import BaseException from "../exception/base.exception";
import CategoryNotFoundException from "../exception/category.not.found.exception";
import catchAsync from "../middleware/asyncHandler";
import Category from "../models/categoryModel";

export const createCategory: RequestHandler = catchAsync(async (req, res) => {
  const categoryParams = req.body;
  const uploadedFile = req.file;

  if (!uploadedFile) throw new BaseException("Зураг хавсаргана уу", 400);

  const category = await Category.create({
    ...categoryParams,
    image: uploadedFile.path,
  });

  res.send(category);
});

export const getCategory: RequestHandler = catchAsync(
  async (req, res, next) => {
    const categoryId = req.params.id;

    const category = await Category.findById(categoryId);
    if (!category) throw new CategoryNotFoundException();

    const base64img = await fs.readFileSync(<string>category.image, {
      encoding: "base64",
    });
    category.image = base64img;

    res.send(category);
  }
);

export const getCategories: RequestHandler = catchAsync(
  async (req, res, next) => {
    const categories = await Category.find();

    res.send(categories);
  }
);

export const updateCategory: RequestHandler = catchAsync(
  async (req, res, next) => {
    const categoryId = req.params.id;
    const categoryParams = req.body;

    const category = await Category.findById(categoryId);
    if (!category) throw new CategoryNotFoundException();

    const updatedCategory = await Category.findOneAndUpdate(
      { _id: category._id },
      {
        title: categoryParams.title,
        description: categoryParams.description,
        image: categoryParams.image,
        province_id: categoryParams.province_id,
      },
      {
        returnOriginal: false,
      }
    );
    res.send(updatedCategory);
  }
);

export const deleteCategory: RequestHandler = catchAsync(
  async (req, res, next) => {
    const categoryId = req.params.id;

    const category = await Category.findById(categoryId);
    if (!category) throw new CategoryNotFoundException();

    await Category.deleteOne({ _id: category._id });
    res.send("Ok");
  }
);
