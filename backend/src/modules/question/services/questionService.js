import { questionModel } from "../model/questionModel.js";

export const questionService = {
  async createQuestion(questionDetails) {
    try {
      const { question, url, solution, category, videoUrl, diffcultyLevel } =
        questionDetails;
      if (!question)
        return { success: false, message: "question name is required" };
      if (!url) return { success: false, message: "url is required" };
      if (!solution) return { success: false, message: "solution is required" };
      if (!category) return { success: false, message: "category is required" };
      if (!videoUrl) return { success: false, message: "videoUrl is required" };
      if (!diffcultyLevel)
        return { success: false, message: "diffcultyLevel is required" };
      const newQuestion = await questionModel
        .create({ question, url, solution, category, videoUrl, diffcultyLevel })
        .populate("category");
      if (newQuestion) {
        return {
          success: true,
          message: "question created successfully",
          data: newQuestion,
        };
      }
      return { success: false, message: "Failed to create question" };
    } catch (err) {
      throw err;
    }
  },
  async getAllQuestion() {
    try {
      const questions = await questionModel.find({});
      if (questions) {
        return {
          success: true,
          message: "questions fetched successfully",
          data: questions,
        };
      }
      return { success: false, message: "Failed to fetch questions" };
    } catch (err) {
      throw err;
    }
  },
  async singleQuestion(id) {
    try {
      const question = await questionModel.findById(id);
      if (!question)
        return { success: false, message: "Failed to Fetch the question" };
      return {
        success: true,
        message: "question fetch successfully",
        data: question,
      };
    } catch (err) {
      throw err;
    }
  },
  async deleteQuestion(id) {
    try {
      const questions = await questionModel.findByIdAndDelete(id);
      if (!questions) {
        return { success: false, message: "Failed to delete the question" };
      }
      return { success: true, message: "question delete successfully" };
    } catch (err) {
      throw err;
    }
  },
  async findQuestionByCategory(category) {
    try {
      const questions = await questionModel.find({ category });
      if (!questions) {
        return { success: false, message: "Failed to fetch questions" };
      }
      return { success: true, message: "question fetch successfully" };
    } catch (err) {
      throw err;
    }
  },
};
