import { userService } from "../services/userServices.js";
export const userController = {
  async register(req, res) {
    try {
      const response = await userService.register(req.body);
      res.status(200).send(response);
    } catch (err) {
      console.log("error in register route");
      res.status(400).json({ success: false, message: err });
    }
  },
  async login(req, res) {
    try {
      const response = await userService.login(req.body);
      res.status(200).send(response);
    } catch (err) {
      console.log("Error in login controller", err);
      res.status(400).json({ success: false, message: err });
    }
  },
  async forgotPassword(req, res) {
    try {
      const response = await userService.forgotPassword(req.body);
      res.status(200).send(response);
    } catch (err) {
      console.log("Error in forgot password controller", err);
      res.status(400).send({ success: false, message: err });
    }
  },
  async getAllUser(req, res) {
    try {
      const response = await userService.getAllUser();
      res.status(200).send(response);
    } catch (err) {
      console.log("Error in get all user controller", err);
      res.status(400).send({ success: false, message: err });
    }
  },
  async getSingleUser(req, res) {
    try {
      const response = await userService.getSingleUser(req.body.id);
      res.status(200).send(response);
    } catch (err) {
      console.log("Error in get single user controller", err);
      res.status(400).send({ success: false, message: err });
    }
  },
  async deleteUser(req, res) {
    try {
      const response = await userService.deleteUser(req.body.id);
      res.status(200).send(response);
    } catch (err) {
      console.log("Error in delete user controller", err);
      res.status(400).send({ success: false, message: err });
    }
  },
};
