import express from "express";
import { config } from "dotenv";
config();
const app = express();

app.listen(process.env.PORT, () => {
  console.log(`http://localhost:${process.env.PORT}`);
});
