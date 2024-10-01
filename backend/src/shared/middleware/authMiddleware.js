import jwt from "jsonwebtoken";
import { userModel } from "../../modules/user/model/userSchema.js";

export const requireSign = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ success: false, message: "Unauthorized" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).send({ success: false, message: "Invalid token" });
    }

    req.user = decode;

    next();
  } catch (err) {
    console.log("error in authMiddleware", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send({ success: false, message: "Unauthorized" });
    }
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      return res.status(401).send({ success: false, message: "Invalid token" });
    }
    // console.log(decode._id);
    const user = await userModel.findById(decode._id);
    // console.log(user);
    if (!user) {
      return res
        .status(401)
        .send({ success: false, message: "User not found" });
    }
    if (user.role !== "admin") {
      return res
        .status(401)
        .send({ success: false, message: "You are not admin" });
    }
    next();
  } catch (err) {
    console.log("error in isAdmin authMiddleware", err);
    res.status(500).json({ success: false, message: err.message });
  }
};
