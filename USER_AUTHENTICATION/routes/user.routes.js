import express from "express";
import {
  register,
  emailVerify,
  login,
  forgetPassword,
  change_password_with_link,
  verify_resetPassword_link,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

router.route("/verification/:token").get(emailVerify);

router.route("/resetPassword").post(forgetPassword);

router.route("/resetPassword/:token").get(verify_resetPassword_link);

export default router;
