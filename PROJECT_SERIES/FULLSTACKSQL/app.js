import express, { urlencoded } from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
config({ path: "./" });
import cors from "cors";
import userRouter from "./routes/auth.route.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(cookieParser());
app.use(
  cors({
    origin: "http://loacclhost:5173",
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }));

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "welcome",
  });
});
app.use("/api/v1/users", userRouter);

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
});
