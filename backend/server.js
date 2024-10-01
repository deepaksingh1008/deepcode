import express from "express";
import dotenv from "dotenv";
import dbConnection from "./src/shared/db/connection.js";
import cors from "cors";
import userRouter from "./src/modules/user/routes/userRoute.js";
import categoryRoute from "./src/modules/category/routes/categoryRoute.js";
import questionRoute from "./src/modules/question/routes/questionRoute.js";
const app = express();

//
dotenv.config();
//middleware
app.use(express.json());
app.use(cors());
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/question", questionRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running on port", process.env.PORT);
  dbConnection();
});
