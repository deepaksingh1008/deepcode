import { userModel } from "../model/userSchema.js";
import {
  hashPassword,
  comparePassword,
} from "../../../shared/logger/authHelper.js";
import jwt from "jsonwebtoken";
export const userService = {
  async register(user) {
    try {
      const { name, email, password, answer } = user;
      if (!user.email) {
        return "Please provide email";
      }
      if (!user.password || user.password.length < 3)
        return "Please provide password";
      if (!user.name) return "Please Provide name";
      if (!user.answer) {
        return "please provide answer";
      }
      const hashedPassword = await hashPassword(password);

      const newUser = await userModel.create({
        name,
        password: hashedPassword,
        email,
        answer,
      });
      return { success: true, message: "user register successfully" };
    } catch (err) {
      throw err;
    }
  },
  async login(user) {
    try {
      const { password, email } = user;
      if (!password) return { success: false, message: "Enter the Password" };
      if (!email) {
        return { success: false, message: "enter your email" };
      }
      const newUser = await userModel.findOne({ email });
      if (!newUser)
        return {
          success: false,
          message: "user are not found please register",
        };
      const isMatch = await comparePassword(password, newUser.password);
      if (!isMatch)
        return { success: false, message: "password did not match" };
      const token = await jwt.sign(
        { _id: newUser._id },
        process.env.JWT_SECRET
      );
      return {
        success: true,
        message: "Login Successfully",
        data: newUser,
        token,
      };
    } catch (err) {
      throw err;
    }
  },
  async forgotPassword(user) {
    try {
      const { answer, email, newPassword } = user;
      if (!answer) return { success: false, message: "Enter you answer" };
      if (!email) return { success: false, message: "Enter email" };

      const findUser = await userModel.findOne({ email });
      if (!findUser) {
        return { success: false, message: "User not found" };
      }
      if (findUser.answer !== answer)
        return res
          .status(400)
          .json({ success: false, message: "your answer does not match" });
      const hashedPassword = await hashPassword(newPassword);
      findUser.password = hashedPassword;
      await findUser.save();
      return { success: true, message: "password updated successfully" };
    } catch (err) {
      throw err;
    }
  },
  async getAllUser() {
    try {
      const users = await userModel.find({});
      return { success: true, data: users };
    } catch (err) {
      console.log("Error in getting all user", err);
      throw err;
    }
  },
  async getSingleUser(id) {
    try {
      const user = await userModel.findById(id);
      return { success: true, message: "user find successfully", data: user };
    } catch (err) {
      console.log("error in get single user", err);
      throw err;
    }
  },
  async deleteUser(id) {
    try {
      const user = await userModel.findByIdAndDelete(id);
      return { success: true, message: "user deleted successfully" };
    } catch (err) {
      console.log("error in get single user", err);
      throw err;
    }
  },
};
