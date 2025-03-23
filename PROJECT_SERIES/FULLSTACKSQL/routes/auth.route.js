import express from "express";
import { registerUser } from "../controllers/test.controller.js";

const userRouter = express.Router();

export default userRouter;

userRouter.post("/register", registerUser);
