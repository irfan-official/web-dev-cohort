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

    await sendMail(createdUser.email, createdUser.verificationToken);

    return res.status(201).json({
      success: true,
      message: "user register successfully",
      data: createdUser,
    });
  } catch (error) {
    return res.status(500).json({
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

    // assign jwt token

    const jwtOptions = {
      expiresIn: "1d", // Token will expire in 1 day
      algorithm: "HS256", // Default, but you can specify it explicitly
      issuer: "irfans.dev", // Optional: who issued the token (your app/domain)
      audience: "users", // Optional: intended audience
    };

    const payload = { id: user._id };

    const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, jwtOptions);

    res.cookies("jwtToken", jwtToken);

    return res.status(200).redirect("/");
  } catch (error) {
    console.log("Login controller error: ", error.message);
    return res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

export const forgetPassword = async (req, res) => {
  // gennerate a hash and send to user email

  const resetPasswordToken = crypto.randomBytes(32).toString("hex");

  const user = await findOne({ email });

  user.resetPasswordToken = resetPasswordToken;
  user.resetPasswordExpires = new Date.now(0);

  await user.save();
};

export const change_password_with_link = async (req, res) => {
  // gennerate a hash and send to user email
};
