// register controller
import User from "../models/user.models.js";
import crypto from "crypto";
import sendMail from "../utils/sendMail.util.js";

export const register = async (req, res) => {
  // 1. get user data from req body
  try {
    const { name, email, password, role = "User" } = req.body;

    if (!name || !email || !password) {
      return res.status(404).json({
        success: false,
        error: "every field required",
      });
    }
    if (password.legth < 6) {
      return res.status(404).json({
        success: false,
        error: "password legth minimum 6 required",
      });
    }

    checkUser = await User.findOne({ email });

    if (checkUser) {
      return res.status(404).json({
        success: false,
        error: "user already exist",
      });
    }

    const createdUser = await User.create({
      name,
      email,
      password,
      role,
    });

    // generate temporary token (email verification token)
    createdUser.verificationToken = crypto.randomBytes(32).toString("hex");

    await createdUser.save();

    if (!createdUser) {
      return res.status(404).json({
        success: false,
        error: "user not created",
      });
    }

    res.status(201).json({
      success: true,
      message: "user register successfully",
      data: createdUser,
    });

    await sendMail(createdUser.email, verificationToken);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
