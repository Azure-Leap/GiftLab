import { Router, Request, Response } from "express";
import { createUser, deleteUser, getUserProfileRatings, getUser, getUsers, UpdateUserProfileRatings, getComments, writeComment } from "../controllers/user.controller";
// import authenticate, { permission } from "../middleware/authentication";
// import { UserRole } from "../models/userModel";

const router = Router();

// api/users/{id}/ratings

router.route('/:id/ratings').get(getUserProfileRatings).put(UpdateUserProfileRatings)
router.route('/:id/comments').get(getComments).post(writeComment)
router.route('/:id').delete(deleteUser).get(getUser)

router
  .route("/")
  .post(createUser) //authenticate, permission([UserRole.ADMIN]), createUser
  .get(getUsers); //authenticate, permission([UserRole.ADMIN]), 

// router
//   .route("/info")
//   .get(getOwnInfo );

  //     authenticate, permission([UserRole.ADMIN, UserRole.USER]),
    

// router
//   .route("/:id")
//   .get(authenticate, permission([UserRole.ADMIN]), getUser)
//   .put(authenticate, permission([UserRole.ADMIN]), updateUser)
//   .delete(
//     authenticate,
//     permission([UserRole.ADMIN]),
//     deleteUser
//   );


export default router;



// RATE
// const {id} = req.params // profile id
// const {commentedPersonId,  comment} = req.body
// // console.log('idiii', id)
// const whichProfile = await Comment.findOne({userId : id}),
//       isExistingPerson = whichProfile?.comments.find(comment => comment.personWhoWritesComment === commentedPersonId )
// if(!isExistingPerson) {
//   const newComment = {
//     personWhoWritesComment : commentedPersonId,
//     comment
//   }
//  whichProfile?.comments.push(newComment)
//  console.log('a')
//  let updatedData = await Comment.updateOne({userId : id}, {$set:{ comments : whichProfile?.comments}})
// console.log(updatedData)
//  res.status(200).json({
//   updatedData
//  })
// } else throw new BaseException('Uuchlaarai ta ali hediinee comment bichsen bn', 403 )