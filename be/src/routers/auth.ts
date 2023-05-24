import { Router, Request, Response } from "express";
import { login } from "../controllers/auth.controller";


const router: Router = Router();

router.route("/login").post(login);

export default router;
