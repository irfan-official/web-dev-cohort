import jwt from "jsonwebtoken";

export default function (res, user) {
  const jwtOptions = {
    expiresIn: "1d", // Token will expire in 1 day
    algorithm: "HS256", // Default, but you can specify it explicitly
    issuer: "irfans.dev", // Optional: who issued the token (your app/domain)
    audience: "users", // Optional: intended audience
  };
  const payload = { id: user._id };
  const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, jwtOptions);

  return jwtToken;
}
