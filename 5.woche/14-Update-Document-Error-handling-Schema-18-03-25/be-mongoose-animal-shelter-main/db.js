import "dotenv/config.js";
import mongoose from "mongoose";
export async function connect() {
  const URI = process.env.MONGO_STRING;
  try {
    await mongoose.connect(URI);
    console.log("Connectd to MongoDB!");
  } catch (error) {
    console.log("Faild to connect to MongoDB", error);
  }
}
