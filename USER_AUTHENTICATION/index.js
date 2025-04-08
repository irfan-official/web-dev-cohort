import { config } from "dotenv";
config();
import express, { urlencoded } from "express";
import cors from "cors";
import db from "./utils/dbConnection.utils.js";
import userRoutes from "./routes/user.routes.js";

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(
  cors({
    origin: [process.env.BASE_URL, `http://localhost:${port}`],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/vi/users", userRoutes);

app.listen(port, () => {
  db();
  console.log(`app started at http://localhost:${port}`);
});

