import jwt from "jsonwebtoken";

const isLoggedIn = (req, res, next) => {
  // 1. fetch the jwtToken from cookies
  // 2. extract the data and put the data on req.user

  const cookieHeader = req.headers.cookie;
  if (!cookieHeader) {
    return res
      .status(401)
      .json({ success: false, message: "No cookies found" });
  }

  const cookies = Object.fromEntries(
    cookieHeader.split(";").map((c) => c.trim().split("=")) // creates array of [key, value]
  );

  const token = cookies.jwtToken;

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token not found in cookies" });
  }

  //console.log(`Cookie = ${req.headers.cookie}`);
  //console.log(`ParseCookie = ${cookies}`);

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

export default isLoggedIn;
