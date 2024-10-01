import { categoryModel } from "../model/categoryModel.js";

export const categoryServices = {
  async createCategory(categoryName) {
    try {
      if (!categoryName) {
        return { success: false, message: "please provide category name" };
      }
      const category = await categoryModel.create(categoryName);
      return { success: true, message: "category created successfully" };
    } catch (err) {
      throw err;
    }
  },
  async updateCategory(id, categoryName) {
    try {
      if (!id) {
        return { success: false, message: "id must be needed" };
      }
      if (!categoryName) {
        return { success: false, message: "category name must be needed" };
      }
      const category = await categoryModel.findByIdAndUpdate(
        id,
        { categoryName: categoryName },
        { new: true }
      );
      return { success: true, message: "category update successfully" };
    } catch (err) {
      throw err;
    }
  },
  async deleteCategory(id) {
    try {
      const category = await categoryModel.findByIdAndDelete(id);
      return { success: true, message: "category deleted successfully" };
    } catch (err) {
      throw err;
    }
  },
  async getAllCategory() {
    try {
      const category = await categoryModel.find({});
      return {
        success: true,
        message: "category fetch successfully",
        data: category,
      };
    } catch (err) {
      throw err;
    }
  },
  async getSingleCategory(id) {
    try {
      const category = await categoryModel.findById(id);
      return {
        success: true,
        message: "fetch category successfully",
        data: category,
      };
    } catch (err) {
      throw err;
    }
  },
};
