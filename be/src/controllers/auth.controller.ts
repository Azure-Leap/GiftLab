import { RequestHandler } from "express";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/userModel";
import catchAsync from "../middleware/asyncHandler";
import UserNotFoundException from "../exception/user.not.found.exception";
import InvalidAuthenticationException from "../exception/invalid.authentication.exception";

export const login: RequestHandler = catchAsync(async (req, res) => {
  const { email, password: plainPassword } = req.body;

  const user = await User.findOne({ email });
  if (!user) throw new UserNotFoundException();

  const isMatch = await bcrypt.compare(plainPassword, user.password);
  if (!isMatch) throw new InvalidAuthenticationException();

  const token = jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET!
  );

  res.status(200).json({ token });
});
