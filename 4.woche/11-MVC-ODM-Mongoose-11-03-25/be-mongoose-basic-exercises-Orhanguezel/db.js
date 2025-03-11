import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;

const connect = async () => {
  try {
    await mongoose.connect(url);

    console.log("✅ MongoDB successfully connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
  }
};


mongoose.connection.on("connected", () => 
  console.log("✅ MongoDB connection established")
);
mongoose.connection.on("error", (error) => 
  console.log("❌ MongoDB connection error:", error.message)
);
mongoose.connection.on("disconnected", () => 
  console.log("❌ MongoDB connection lost")
);

export default connect;
