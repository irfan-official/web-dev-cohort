import express from "express";
import { config } from "dotenv";
config();
const app = express();

app.get("/", (req, res) => {
  res.send("Cohort");
});

app.get("/:id", (req, res) => {
  res.send(`hello ${req.params.id}`);
});

app.listen(process.env.PORT, () => {
  console.log(`App started at http://localhost:${process.env.PORT}`);
});
