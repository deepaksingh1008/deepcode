import mongoose, { Schema } from "mongoose";

const questionSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    Url: { type: String, required: true },
    solution: { type: String, required: true },
    category: { type: Schema.Types.ObjectId, ref: "category" },
    videoUrl: { type: String, default: null },
    diffcultyLevel: { type: String, enum: ["easy", "medium", "hard"] },
  },
  { timestamps: true }
);

export const questionModel = mongoose.model("question", questionSchema);
