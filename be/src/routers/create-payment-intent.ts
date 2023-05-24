import { Router, Request, Response } from "express";
import { createPaymentIntent } from "../controllers/create-payment-intent";
import authenticate from "../middleware/authentication";


const router = Router();

router
  .route("/")
  .post(createPaymentIntent)
  // authenticate,

export default router