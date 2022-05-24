import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Admin:pass1234@cluster0.tm2uj.mongodb.net/?retryWrites=true&w=majority",
      {}
    );

    console.log("Mongoose connection success");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
