import { RequestHandler } from "express";
import { Types } from "mongoose";
import jwt from "jsonwebtoken";

import BaseException from "../exception/base.exception";
import UserNotFoundException from "../exception/user.not.found.exception";
import User, { UserRole } from "../models/userModel";
import catchAsync from "./asyncHandler";

export interface TokenDetail {
  id: string;
  role : string
}

export interface RequestUser {
  _id: Types.ObjectId;
  name: string;
  age: number;
  gender: string;
  email: string;
  password: string;
  phone_number: number;
  isActive: boolean;
  role: UserRole;
}

const authenticate: RequestHandler = catchAsync(async (req, res, next) => {
  if (
    !req.headers.authorization ||
    !req.headers.authorization.startsWith("Bearer")
  )
    throw new BaseException("Системд нэвтэрнэ үү!", 401);

  const token = req.headers.authorization.split(" ")[1];
  if(!token) throw new BaseException('Системд нэвтэрнэ үү!', 400);

    const tokenDetail = <TokenDetail>jwt.verify(token, process.env.JWT_SECRET!);


    const user = <RequestUser>(<unknown>await User.findById(
      tokenDetail.id
    ).select({
      __v: false,
      createdAt: false,
      updatedAt: false,
    }));

    if (!user) throw new UserNotFoundException();
    if (!user.isActive)
      throw new BaseException("Хэрэглэгчийн эрх хаагдсан байна", 401);

    req.body.userIdd = tokenDetail.id;
    req.body.userRole = tokenDetail.role;
    // req.body.user = user;
    return next();
  
});


// 22

export const permission = (role: UserRole[]): RequestHandler =>
  catchAsync(async (req, res, next) => {
    if (!req.body.user) throw new BaseException("Системд нэвтэрнэ үү!", 401);

    if (!req.body.user.role)
      throw new BaseException("Хэрэглэгчийн эрх хүрэхгүй байна", 403);

    if (!role.includes(req.body.user.role))
      throw new BaseException("Хэрэглэгчийн эрх хүрэхгүй байна", 403);

    return next();
  });

export default authenticate;
