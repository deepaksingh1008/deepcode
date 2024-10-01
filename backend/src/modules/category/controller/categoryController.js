import { categoryServices } from "../services/categoryServices.js";

export const categoryController = {
  async createCategory(req, res) {
    try {
      const response = await categoryServices.createCategory(
        req.body.categoryName
      );
      res.status(200).send(response);
    } catch (err) {
      console.log("error in creating category", err);
      res.status(400).send({ success: false, message: err });
    }
  },
  async updateCategory(req, res) {
    try {
      const response = await categoryServices.updateCategory(
        req.body.id,
        req.body.categoryName
      );
      res.status(200).send(response);
    } catch (err) {
      console.log("error in updating category", err);
      res.status(400).send({ success: false, message: err });
    }
  },
  async deleteCategory(req, res) {
    try {
      const response = await categoryServices.deleteCategory(req.body.id);
      res.status(200), send(response);
    } catch (err) {
      console.log("error in delete category", err);
      res.status(400).send({ success: false, message: err });
    }
  },
  async getAllCategory(req, res) {
    try {
      const response = await categoryServices.getAllCategory();
      res.status(200).json(response);
    } catch (err) {
      console.log("error in getting all category", err);
      res.status(400).json({ success: false, message: err });
    }
  },
  async getSingleCategory(req, res) {
    try {
      const response = await categoryServices.getSingleCategory(req.body.id);
      res.status(200).send(response);
    } catch (err) {
      console.log("get error to fetching single category", err);
      res.status(400).json({ success: false, message: err });
    }
  },
};
