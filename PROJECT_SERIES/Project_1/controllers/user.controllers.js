import User from "../models/User.models.js";
import crypto from "crypto";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  // get Data
  // validate
  // check if user already exist
  // if not exist then create a user in database
  // generate a verification token (6 degit)
  // save token in database
  // and send token to email
  // send success status to user

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(404).json({
      message: "All fileds are required",
    });
  }
  try {
    const existingUser = await User.findOne({
      email,
    });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist 27" });
    }

    const user = await User.create({ name, email, password });

    console.log("line 34 user.controller created user ", user);

    if (!user) {
      return res.status(400).json({ message: "User not register 35" });
    }

    const token = crypto.randomBytes(32).toString("hex");
    user.verificationToken = token;

    await user.save();

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    const mailOption = {
      from: process.env.MAILTRAP_SENDERMAIL, // sender address
      to: user.email, // list of receivers
      subject: "verify your email", // Subject line
      text: `Please click the following link
      ${process.env.BASE_URL}/api/v1/users/verify/${token}`, // plain text body
      html: "<b>Hello world?</b>", // html body
    };

    try {
      await transporter.sendMail(mailOption);
    } catch (error) {
      console.log(`Sending mail error in line 66 ==> ${error.message}`);
    }

    res.status(201).json({
      message: "User registeres successfully",
      data: user,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const verifyUser = async (req, res) => {
  // get token from url
  // validate
  // find user based on token
  // if not
  // set isVarified field field to true
  // remove isVarification token
  // save
  // return response

  const { token } = req.params;

  if (!token) {
    return res.status(400).json({ message: "Invalid token" });
  }
  const user = await User.findOne({
    verificationToken: token,
  });

  if (!user) {
    return res.status(200).json({ message: "Invalid token" });
  }
  user.isVarified = true;
  user.verificationToken = undefined;
  await user.save();

  return res.status(200).json({ data: user });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "username and email is required" });
  }
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid user",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("122 => isMatch", isMatch);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid username or massword",
      });
    }

    try {
      const jwtToken = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );
      const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000,
      };
      res.cookie("test", jwtToken, cookieOptions);
    } catch (error) {
      console.log("JWT sign error => line 149", error.message);
    }

    return res.status(200).json({
      success: true,
      message: "Login success",
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: "" });
  }
};

export const getMe = async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(400).json({
        success: false,
        message: "User ID is missing",
      });
    }

    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log("getMe error ==> ", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.cookie("test", "", {
      expires: new Date(0),
    });

    return res.status(400).json({
      success: true,
      message: "Logged out successfully",
    });
  } catch (error) {
    console.log("logoutUser error ==> ", error.message);
  }
};

export const forgotPassword = async (req, res) => {
  try {
    // 1. get email from req.body
    // 2. find user based on email
    // 3. changge the   resetPasswordToken, resetPasswordExpires
    // reset token + reset expirey => Date.now() + 10 * 60 * 1000
    // user.save()
    // send mail with token

    let { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "User Email is required",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    const token = crypto.randomBytes(32).toString("hex");

    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now(0) + 10 * 60 * 1000;
    await user.save();

    const transporter = nodemailer.createTransport({
      host: process.env.MAILTRAP_HOST,
      port: process.env.MAILTRAP_PORT,
      secure: false, // true for port 465, false for other ports
      auth: {
        user: process.env.MAILTRAP_USERNAME,
        pass: process.env.MAILTRAP_PASSWORD,
      },
    });
    const mailOption = {
      from: process.env.MAILTRAP_SENDERMAIL, // sender address
      to: user.email, // list of receivers
      subject: "Reset your password", // Subject line
      text: `Please click the following link
      ${process.env.BASE_URL}/api/v1/users/resetPassword/${token}`,
      html: "<b>Reset Passowrd</b>", // html body
    };

    try {
      await transporter.sendMail(mailOption);
    } catch (error) {
      console.log(`Sending mail error in line 260 ==> ${error.message}`);
    }
    return res.status(500).json({
      success: true,
      message: "Check your mail",
    });
  } catch (error) {
    console.log("forgotPassword error ==> ", error.message);
    return res.status(500).json({
      success: false,
      messagge: "Internal server error",
      error: error.message,
    });
  }
};

export const resetPassword = async (req, res) => {
  try {
    // collect token from params
    // collect password from req.body
    // find the user basis of valid resetPasswordExpires and token
    // update the password and save it

    const { token } = req.params;
    const { password } = req.body;

    if (!token || !password) {
      return res.status(400).json({ message: "Invalid token" });
    }

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now(0) },
    });

    if (!user) {
      return res.status(200).json({ message: "Invalid token" });
    }

    user.password = password;
    user.resetPasswordExpires = undefined;
    user.resetPasswordToken = undefined;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Reset password successfully",
      user: user,
    });
  } catch (error) {
    console.log("resetPassword error ==> ", error.message);
    return res.status(500).json({
      success: false,
      messagge: "Internal server error",
      error: error.message,
    });
  }
};
