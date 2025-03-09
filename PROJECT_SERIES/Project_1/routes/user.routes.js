import express from "express";
import { registerUser } from "../controllers/user.controllers.js";
const router = express.Router();

export default router;

router.get("/register", registerUser);
