import { Request, Response, NextFunction, RequestHandler } from "express";

const catchAsync =
  (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) =>{
    console.log("JDK");
    return Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  }
  
    

export default catchAsync;
