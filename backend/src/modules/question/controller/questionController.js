import { questionService } from "../services/questionService.js";

export const questionController = {
  async createQuestion(req, res) {
    try {
      const response = await questionService.createQuestion(req.body);
      return res.status(200).send(response);
    } catch (err) {
      res.status(400).json({ success: false, message: err.message });
    }
  },
  async getAllQuestion(req, res) {
    try {
      const response = await questionService.getAllQuestion();
      res.status(200).send(response);
    } catch (err) {
      return res.status(400).send({ success: false, message: err.message });
    }
  },
  async getSingleQuestion(req, res) {
    try {
      const { id } = req.params;
      const response = await questionService.singleQuestion(id);
      return res.status(200).send(response);
    } catch (err) {
      console.log("error in single question", err);
      res.status(400).send({ success: false, message: err });
    }
  },
  async deleteQuestion(req, res) {
    try {
      const { id } = req.params;
      const response = await questionService.deleteQuestion(id);
      res.status(200).send(response);
    } catch (err) {
      console.log("error in delete question", err);
      res.status(400).send({ success: false, message: err.message });
    }
  },
  async getQuestionByCategory(req, res) {
    try {
      const response = await questionService.findQuestionByCategory(req.body);
      return res.status(200).send(response);
    } catch (err) {
      console.log("error in get question Category", err);
    }
  },
};
