import mongoose from "mongoose";

export default async function connectDB() {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.log("DB connection error => ", err.message);
    });
}

