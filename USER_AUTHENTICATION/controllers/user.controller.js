// register controller
import User from "../models/user.models.js";
export const register = async (req, res) => {
  // 1. get user data from req body
  try {
    const { name, email, password, phonenumber, role = "User" } = req.body;

    if (!name || !email || !password) {
      return res.status(404).json({
        success: false,
        error: "every field required",
      });
    }

    const createdUser = await User.create({
      name,
      email,
      password,
      phonenumber,
      role,
    });

    return res.status(201).json({
      success: true,
      data: createdUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
