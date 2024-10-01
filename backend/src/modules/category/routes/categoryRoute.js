import express from "express";
import { categoryController } from "../controller/categoryController.js";
import {
  requireSign,
  isAdmin,
} from "../../../shared/middleware/authMiddleware.js";
const categoryRoute = express.Router();

categoryRoute.post(
  "/create-category",
  requireSign,
  isAdmin,
  categoryController.createCategory
);
categoryRoute.put(
  "/update-category",
  requireSign,
  isAdmin,
  categoryController.updateCategory
);
categoryRoute.delete(
  "/delete-category",
  requireSign,
  isAdmin,
  categoryController.deleteCategory
);
categoryRoute.get("/getall-category", categoryController.getAllCategory);
categoryRoute.get("/get-single-category", categoryController.getSingleCategory);

export default categoryRoute;
