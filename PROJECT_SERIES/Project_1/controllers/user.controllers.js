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

    console.log("line 31 user.controller created user ", user);

    if (!user) {
      return res.status(400).json({ message: "User not register 35" });
    }

    const token = crypto.randomBytes(32).toString("hex");
    user.verificationToken = token;

    await user.save();

    // const transporter = nodemailer.createTransport({
    //   host: process.env.MAILTRAP_HOST,
    //   port: process.env.MAILTRAP_PORT,
    //   secure: false, // true for port 465, false for other ports
    //   auth: {
    //     user: process.env.MAILTRAP_USERNAME,
    //     pass: process.env.MAILTRAP_PASSWORD,
    //   },
    // });
    // const mailOption = {
    //   from: process.env.MAILTRAP_SENDERMAIL, // sender address
    //   to: user.email, // list of receivers
    //   subject: "verify your email", // Subject line
    //   text: `Please click the following link
    //   ${process.env.BASE_URL}/api/v1/users/verify/${token}}`, // plain text body
    //   html: "<b>Hello world?</b>", // html body
    // };

    // await transporter.sendMail(mailOption);

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
  user.verificationToken = null;
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

    const jwtToken = jwt.sign({ id: user._id, role: user.role }, "shhh", {
      expiresIn: "24h",
    });
    const cookieOptions = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("test", jwtToken, cookieOptions);

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
