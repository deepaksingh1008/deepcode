import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log("Database Connected", conn.connection.host);
  } catch (error) {
    console.log("error in db connection", error);
  }
};

export default dbConnection;
