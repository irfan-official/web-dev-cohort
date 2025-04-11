import jwt from "jsonwebtoken";

export default function (res, userID, secret_key, time = "1d") {
  const jwtOptions = {
    expiresIn: time, // Token will expire in default 1 day
    algorithm: "HS256", // Default, but you can specify it explicitly
    issuer: "irfans.dev", // Optional: who issued the token (your app/domain)
    audience: "users", // Optional: intended audience
  };
  const payload = { id: userID };
  const jwtToken = jwt.sign(payload, secret_key, jwtOptions);

  return jwtToken;
}
