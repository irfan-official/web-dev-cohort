import jwt from "jsonwebtoken";
import genJWT from "../utils/jwt.utils.js";
import assignCookies from "../utils/cookies.utils.js";

const isLoggedIn = (req, res, next) => {
  // 1. fetch the jwtToken from cookies
  // 2. extract the data and put the data on req.user
  try {
    const cookieHeader = req.headers.cookie;
    if (!cookieHeader) {
      return res
        .status(401)
        .json({ success: false, message: "No cookies found" });
    }

    // const cookies = Object.fromEntries(
    //   cookieHeader.split(";").map((c) => c.trim().split("=")) // creates array of [key, value]
    // );

    let accessToken = req.cookies.access_token;
    const refreshToken = req.cookies.refresh_token;

    if (!accessToken) {
      if (!refreshToken) {
        return res
          .status(401)
          .json({ success: false, message: "Login required" });
      } else {
        const decoded_refresh_token = jwt.verify(
          refreshToken,
          process.env.JWT_REFRESH_TOKEN_SECRET_KEY
        );

        const userID = decoded_refresh_token.id;

        accessToken = genJWT(
          res,
          userID,
          process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
          process.env.JWT_ACCESS_TOKEN_EXPIRE
        );

        assignCookies(
          res,
          "access_token",
          accessToken,
          process.env.JWT_ACCESS_TOKEN_EXPIRE
        );
      }
    }

    //console.log(`Cookie = ${req.headers.cookie}`);
    //console.log(`ParseCookie = ${cookies}`);

    const decoded_access_token = jwt.verify(
      accessToken,
      process.env.JWT_ACCESS_TOKEN_SECRET_KEY
    );

    req.user = decoded_access_token;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid or expired token" });
  }
};

export default isLoggedIn;
