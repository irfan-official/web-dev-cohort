import express from "express";
import {
  registerUser,
  verifyUser,
  login,
} from "../controllers/user.controllers.js";
const router = express.Router();

export default router;

router.post("/register", registerUser);
router.get("/verify/:token", verifyUser);
router.post("/login", verifyUser);
