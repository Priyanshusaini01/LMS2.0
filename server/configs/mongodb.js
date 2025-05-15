import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//conntect to mongodb
const connectDB = async () => {
  try { 
    await mongoose.connect(process.env.MONGO_URI); 
    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
console.log("MongoDB connection string:", process.env.MONGO_URI);

export default connectDB;         