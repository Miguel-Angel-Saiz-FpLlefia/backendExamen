import mongoose from "mongoose";
import "dotenv/config";

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Conectado a mongoDB!");
  } catch (err) {
    console.log("Error al conectar el mongoDB: ", err.message);
  }
};

export default connectDB;
