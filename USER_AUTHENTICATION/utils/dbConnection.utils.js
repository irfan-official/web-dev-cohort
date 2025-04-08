import mongoose from "mongoose";

const db = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log(`Database connection successfull`))
    .catch((error) => console.log(`Error connecting DB: `, error));
};

export default db;
