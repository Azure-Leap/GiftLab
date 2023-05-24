import { ErrorRequestHandler } from "express";
import BaseException from "../exception/base.exception";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  console.log("ERR-handler", err);
  if (err instanceof BaseException) {
    return res.status(err.statusCode).send({ message: err.message });
  }

  if (err instanceof Error) {
    return res.status(400).send({ message: err.message });
  }

  return res.status(500).send({
    message: "Internal server error",
  });
};

export default errorHandler;
