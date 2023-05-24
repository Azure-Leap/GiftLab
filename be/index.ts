import express from "express";
import cors from "cors";

// import adminRouter from "./src/routers/admin";
import userRouter from "./src/routers/user";
import authRouter from "./src/routers/auth";
import signInRouter from "./src/routers/signin";
import createPaymentRouter from './src/routers/create-payment-intent'

import categoryRouter from "./src/routers/category";
// import postRouter from "./src/routers/post";

import dotenv from "dotenv";

import { json } from "body-parser";
dotenv.config({path : './src/config/config.env'});

import mongoose from "mongoose";
import errorHandler from "./src/middleware/errorHandler";

if (!process.env.JWT_SECRET || !process.env.PORT || !process.env.MONGO_URI) {
  throw new Error("Серверийн тохиргоо дутуу хийгдсэн байна!");
}

const app = express();

app.use(cors())
app.use(json());
const port = process.env.PORT;

// app.use("/admin", adminRouter);
app.use('/signin', signInRouter )
app.use("/users", userRouter);//userRouter
app.use("/auth", authRouter);
// app.use("/posts", postRouter);
app.use("/category", categoryRouter);
app.use('/create-payment-intent', createPaymentRouter)

app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
});
