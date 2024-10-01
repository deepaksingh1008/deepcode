import express from "express";
import { userController } from "../controller/userController.js";
import {
  requireSign,
  isAdmin,
} from "../../../shared/middleware/authMiddleware.js";

const userRouter = express.Router();

userRouter.post("/register", userController.register);
userRouter.post("/login", userController.login);
userRouter.post("/forgot-password", userController.forgotPassword);
userRouter.get("/getAll-user", requireSign, isAdmin, userController.getAllUser);
userRouter.get(
  "/get-singleUser",
  requireSign,
  isAdmin,
  userController.getSingleUser
);
userRouter.delete(
  "/delete-user",
  requireSign,
  isAdmin,
  userController.deleteUser
);

export default userRouter;
