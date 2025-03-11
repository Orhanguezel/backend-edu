import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";

dotenv.config();

const url = process.env.MONGO_URL;

// MongoDB connection  1 Empfohlemene Art und Weise
/*
mongoose
.connect(url)
.then(() => {
  console.log("✅ MongoDB connected");
})
.catch((error) => {
    console.log("❌ MongoDB connection error: ", error.message);
});

*/

mongoose.connection.on("connected", () => console.log("✅ MongoDB connected"));
mongoose.connection.on("error", (error) => console.log("❌ MongoDB connection error: ", error.message));
mongoose.connection.on("disconnected", () => console.log("❌ MongoDB disconnected"));

mongoose.connect(url);

User.create({
    email: "employee@localhost",
    password:"1234abc",
})
.then((user) => console.log(user))
.catch((error) => console.log(error));

User.find()
.then((users) => console.log(users))
.catch((error) => console.log(error
));

