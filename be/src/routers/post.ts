// import { Router, Request, Response } from "express";
// import * as postController from "../controllers/post.controller";
// import authenticate, { permission } from "../middleware/authentication";
// import { UserRole } from "../models/userModel";

// const router = Router();

// router
//   .route("/")
//   .post(
//     authenticate,
//     permission([UserRole.USER, UserRole.ADMIN]),
//     postController.createPost
//   )
//   .get(authenticate, postController.getPosts);

// router
//   .route("/:id")
//   .get(postController.getPost)
//   .put(authenticate, postController.updatePost)
//   .delete(authenticate, postController.deletePost);

// export default router;
