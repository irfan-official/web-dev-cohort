import express from "express";
import { registerUser } from "../controllers/auth.controller.js";

const userRouter = express.Router();

export default userRouter;

userRouter.post("/register", registerUser);
