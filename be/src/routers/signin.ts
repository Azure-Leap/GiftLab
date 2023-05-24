import { Router, Request, Response } from "express";
import { signIn} from "../controllers/user.controller";


const router = Router();


router
  .route("/")
  .post( signIn) //authenticate, permission([UserRole.ADMIN]),

export default router
