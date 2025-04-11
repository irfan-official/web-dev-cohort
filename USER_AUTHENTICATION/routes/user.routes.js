import express from "express";
import {
  register,
  emailVerify,
  login,
  forgetPassword,
  change_password_with_link,
  verify_resetPassword_link,
  getProfile,
} from "../controllers/user.controller.js";

import isLoggedIn from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/profile").get(isLoggedIn, getProfile);
router.route("/verification/:token").get(emailVerify);

router.route("/resetPassword").post(forgetPassword);
router.route("/resetPassword/:token").get(verify_resetPassword_link);

router.route("/check" /*Test route only*/).get(isLoggedIn, (req, res) => {
  return res.status(200).json({
    success: true,
  });
});

export default router;
