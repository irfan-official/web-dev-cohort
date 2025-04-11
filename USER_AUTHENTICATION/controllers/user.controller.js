// register controller
import User from "../models/user.models.js";
import crypto from "crypto";
import sendMail from "../utils/sendMail.util.js";
import genJWT from "../utils/jwt.utils.js";
import jwt from "jsonwebtoken";
import assignCookies, { deleteCookiesOptions } from "../utils/cookies.utils.js";

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
    if (password.length < 6) {
      return res.status(404).json({
        success: false,
        error: "password legth minimum 6 required",
      });
    }

    const checkUser = await User.findOne({ email });

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

    if (!createdUser) {
      return res.status(404).json({
        success: false,
        error: "user not created",
      });
    }
    // generate temporary token (email verification token)
    createdUser.verificationToken = crypto.randomBytes(32).toString("hex");

    await createdUser.save();

    const message = "Email verification link => ";

    await sendMail(createdUser.email, createdUser.verificationToken, message);

    // assign jwt token in cookies
    const accessToken = genJWT(
      res,
      createdUser._id,
      process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
      process.env.JWT_ACCESS_TOKEN_EXPIRE
    );
    const refreshToken = genJWT(
      res,
      createdUser._id,
      process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
      process.env.JWT_REFRESH_TOKEN_EXPIRE
    );

    assignCookies(
      res,
      "access_token",
      accessToken,
      process.env.JWT_ACCESS_TOKEN_EXPIRE
    );
    assignCookies(
      res,
      "refresh_token",
      refreshToken,
      process.env.JWT_REFRESH_TOKEN_EXPIRE
    );

    return res.status(201).json({
      success: true,
      message: "user register successfully",
      data: createdUser,
    });
  } catch (error) {
    console.log("Register controller error = ", error.message);
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: "email and password required",
      });
    }
    if (password.length < 6) {
      return res.status(404).json({
        success: false,
        message: "password must be 6 degit",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "invalid user",
      });
    }

    if (!(await user.comparePassword(password))) {
      return res.status(404).json({
        success: false,
        message: "invalid email or password",
      });
    }

    if (!user.isVerified) {
      return res.status(404).json({
        success: false,
        message: "please verify your email",
      });
    }

    // assign jwt token in cookies

    const accessToken = genJWT(
      res,
      user._id,
      process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
      process.env.JWT_ACCESS_TOKEN_EXPIRE
    );
    const refreshToken = genJWT(
      res,
      user._id,
      process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
      process.env.JWT_REFRESH_TOKEN_EXPIRE
    );

    assignCookies(
      res,
      "access_token",
      accessToken,
      process.env.JWT_ACCESS_TOKEN_EXPIRE
    );
    assignCookies(
      res,
      "refresh_token",
      refreshToken,
      process.env.JWT_REFRESH_TOKEN_EXPIRE
    );

    return res.status(200).redirect("/");
  } catch (error) {
    console.log("Login controller error: ", error.message);

    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

export const emailVerify = async (req, res) => {
  // 1. get token form url

  try {
    const token = req.params.token;

    if (!token) {
      return res.status(404).json({
        success: false,
        message: "invalid token",
      });
    }
    // 2. check the troken is found in database

    const validUser = await User.findOne({
      verificationToken: token,
      verificationExpiry: { $gt: Date.now() },
    });

    if (!validUser) {
      return res.status(404).json({
        success: false,
        message: "invalid Token",
      });
    }

    validUser.isVerified = true;
    validUser.verificationExpiry = undefined; //undefined for key will be not store in db
    validUser.verificationToken = undefined;

    await validUser.save();

    return res.status(200).json({
      success: true,
      message: "Verification email successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "login first",
      });
    }

    return res.status(200).json({
      success: true,
      message: "user data",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const logOut = async (req, res) => {
  // 1. remove the accessToken and refresh token

  res.clearCookie("access_token", deleteCookiesOptions);
  res.clearCookie("refresh_token", deleteCookiesOptions);

  return res.status(200).json({
    success: true,
    message: "Logout successfully",
  });
};

// please change from here
export const forgetPassword = async (req, res) => {
  // gennerate a hash and send to user email

  try {
    const resetPasswordToken = crypto.randomBytes(32).toString("hex");

    const token = req.cookies.jwtToken;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ _id: decoded.id });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "not valid user",
      });
    }

    user.resetPasswordToken = resetPasswordToken;
    user.resetPasswordExpires = new Date(Date.now(0) + 10 * 60 * 60 * 1000); // 10 hours

    const message = "Your reset password link is => ";

    const check = await sendMail(user.email, resetPasswordToken, message);

    if (!check) {
      return res.status(500).json({
        success: false,
        message: "Email sent fails",
      });
    }

    await user.save();

    return res.status(500).json({
      success: true,
      message: "reset password link sent to your mail, Check your email",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verify_resetPassword_link = async (req, res) => {
  // gennerate a hash and send to user email

  const { token } = req.params;

  if (!token) {
    return res.status(404).json({
      success: false,
      message: "not valid token",
    });
  }

  const user = await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "not valid user",
    });
  }

  user.resetPasswordExpires = undefined;
  user.resetPasswordToken = undefined;

  await user.save();

  return res.status(201).json({
    success: true,
    message: "Your password reset successfully",
  });
};

export const change_password_with_link = async (req, res) => {};
