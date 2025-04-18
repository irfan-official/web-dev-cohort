import express from "express";
import { config } from "dotenv";
import cors from "cors";
config();
import dbConnection from "./utils/db.js";
import User from "./models/User.models.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import { isLoggedIn } from "./middleware/auth.middleware.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:4000",
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" })); // accept data from url data

app.use("/api/v1/users/", userRoutes);

app.get("/api", (req, res) => {
  res.send("<h1>Cohort</h1>");
});

app.get("/", (req, res) => {
  res.send("<h1>Cohort Home page</h1>");
});

app.listen(port, () => {
  console.log(`App started at http://localhost:${port}`);
  dbConnection();
});
