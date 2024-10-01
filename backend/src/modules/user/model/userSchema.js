import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, default: "user" },
    answer: { type: String, required: true },
    totalQuestionSolved: { type: [String], default: [] },
    favorites: { type: [String], default: [] },
    photo: { type: String, default: null },
  },
  { timestamps: true }
);

export const userModel = mongoose.model("user", userSchema);
