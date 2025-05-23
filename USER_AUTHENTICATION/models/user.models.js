import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
      default: () => new Date(Date.now(0) + 10 * 60 * 60 * 1000), // 10 hour form creation
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

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

    next();
  }
});

userSchema.methods.comparePassword = async function (password) {
  // bcrypt.compare() return Boolean value
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
