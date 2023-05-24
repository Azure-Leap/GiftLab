import { Router, Request, Response } from "express";
import {createCategory, getCategories, getCategory, updateCategory, deleteCategory} from "../controllers/category.controller";
import authenticate from "../middleware/authentication";
import { upload } from "../utils/file.uploader";

const router = Router();

router
  .route("/")
  .post(authenticate, upload.single("image"), createCategory)
  .get(authenticate, getCategories);

router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

export default router;
