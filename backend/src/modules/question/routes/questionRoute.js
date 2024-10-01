import express from "express";
import { questionController } from "../controller/questionController.js";
import {
  isAdmin,
  requireSign,
} from "../../../shared/middleware/authMiddleware.js";
const questionRoute = express.Router();

questionRoute.post("/create-question", questionController.createQuestion);
questionRoute.get("/get-all-question", questionController.getAllQuestion);
questionRoute.get(
  "/get-single-question/:id",
  questionController.getSingleQuestion
);
questionRoute.delete("/delete-question/:id", questionController.deleteQuestion);
questionRoute.get(
  "get-question-category",
  questionController.getQuestionByCategory
);

export default questionRoute;
