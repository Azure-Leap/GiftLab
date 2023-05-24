import { RequestHandler } from "express";
import BaseException from "../exception/base.exception";
import CategoryNotFoundException from "../exception/category.not.found.exception";
import InactiveUserException from "../exception/inactive.user.exception";
import UserNotFoundException from "../exception/user.not.found.exception";
import catchAsync from "../middleware/asyncHandler";
import Category from "../models/categoryModel";
import Post from "../models/postModel";
import RatingUserProfile from "../models/rateUserProfile";
import User from "../models/userModel";


// ------------------------------------------------------------------------------------------------------------------>>

rating : [
    {
        ratedPeopleId : 'adsad',
        emoticons : []
    }
]
// api/users/{id}/comments
