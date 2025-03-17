import mongoose from "mongoose";
import express from "express";
import "dotenv/config.js";
import "./utils/connect.js";
import studentsRouter from "./router/studentRouter.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/students", studentsRouter);

app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});
