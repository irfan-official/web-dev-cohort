import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    isVerified: {
      type: Boolean,
      enum: [true, false],
      default: false,
    },
    role: {
      type: String,
      enum: ["Admin", "User"],
      default: "User",
    },
    verificationToken: {
      type: String,
      trim: true,
    },
    verificationExpiry: {
      type: Date,
      default: () => new Date(Date.now() + 60 * 60 * 1000), // 1 hour form creation
    },
    resetPasswordToken: {
      type: String,
      trim: true,
    },
    resetPasswordExpires: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
