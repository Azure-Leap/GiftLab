import { RequestHandler } from "express";
import BaseException from "../exception/base.exception";
import CategoryNotFoundException from "../exception/category.not.found.exception";
import InactiveUserException from "../exception/inactive.user.exception";
import UserNotFoundException from "../exception/user.not.found.exception";
import catchAsync from "../middleware/asyncHandler";
import Category from "../models/categoryModel";
import Post from "../models/postModel";
import User from "../models/userModel";


// ------------------------------------------------------------------------------------------------------------------>>
export const createPost: RequestHandler = catchAsync(async (req, res, next) => {
  
  const newPost = await Post.create(req.body)
  
  res.status(200).json({
    successful : true,
    data : newPost,
    message : 'Амжилттай шинэ пост үүсгэгдлээ'
  })
});

// ------------------------------------------------------------------------------------------------------------------>>

// export const getPost: RequestHandler = catchAsync(async (req, res, next) => {
//   const postId = req.params.id;

//   const post = await Post.findById(postId);
//   if (!post) throw new BaseException("Post олдсонгүй");

//   res.send(post);
// });

// export const getPosts: RequestHandler = catchAsync(async (req, res, next) => {
//   const posts = await Post.find();

//   res.send(posts);
// });

export const updatePost: RequestHandler = catchAsync(async (req, res, next) => {

  const {id} = req.body

  const post = await Post.findById(id);
  if (!post) throw new BaseException("Post олдсонгүй");

  const updatedPost = await Post.findByIdAndUpdate(id, req.body, {new : true} )

  res.status(200).json({
    successful : true,
    message : 'Амжилттай шинэчлэлээ',
    data : updatedPost
  })

  
});

export const deletePost: RequestHandler = catchAsync(async (req, res, next) => {
  
  const {id} = req.body
  const deletedPost = await Post.findByIdAndDelete(id)

  res.status(200).json({
    successful : true,
    message : 'Амжилттай устгалаа',
    data : deletedPost
  })

});
