import "dotenv/config.js";
import mongoose from "mongoose";
import User from "./models/User.js";

const url = process.env.MONGO_STRING;

// 1 Empfohlen
// mongoose
//   .connect(url)
//   .then(() => {
//     console.log("connect to mongoDB successfuly!");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

//  2 connection events

mongoose.connection.on("connected", () => console.log("DB connected!"));
mongoose.connection.on("error", (error) => console.log("DB Error", error));

mongoose.connect(url);

User.create({
  email: "secondUser@test.com",
  password: "123456abcd",
}).then((user) => {
  console.log(user);
});

User.find().then((users) => {
  console.log("users", users);
});
