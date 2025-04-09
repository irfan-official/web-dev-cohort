import express from "express";
import {
  register,
  emailVerify,
  login,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/verification/:token").get(emailVerify);

export default router;
