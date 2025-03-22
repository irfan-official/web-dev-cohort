import express from "express";
import {
  registerUser,
  verifyUser,
  login,
  getMe,
  logoutUser,
  forgotPassword,
  resetPassword,
} from "../controllers/user.controllers.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
const router = express.Router();

export default router;

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", login);
router.get("/me", isLoggedIn, getMe);
router.get("/logout", isLoggedIn, logoutUser);
router.post("/forgotPassword", forgotPassword);
router.get("/resetPassword/:token", resetPassword);
