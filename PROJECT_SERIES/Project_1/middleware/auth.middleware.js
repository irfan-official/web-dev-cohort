import jwt from "jsonwebtoken";

export const isLoggedIn = async (req, res, next) => {
  try {
    const token = req.cookies?.test;
    console.log("Token found:", token ? "YES" : "NO");

    if (!token) {
      console.log("NO Token");
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
      });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Decoded data:", decoded);
      req.user = decoded;
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: "Invalid token",
        error: error.message,
      });
    }

    next(); 
  } catch (error) {
    console.log("Auth middleware failure", error.message);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
