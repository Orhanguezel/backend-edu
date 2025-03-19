import express from "express";
import cors from "cors";
import "dotenv/config.js";
import "./utils/connect.js";
import userRouter from "./router/userRouter.js";

const app = express();

app.use(express.json());

app.use(cors());

const port = process.env.PORT || 5000;

app.use("/api", userRouter);

app.use((err, req, res, next) => {
  console.log(err);

  const errorKeys = Object.keys(err.errors).map((x) => {
    return err.errors[x].message;
  });
  return res.json(errorKeys);
});

app.listen(port, () => {
  console.log(`server working on ${port} port!`);
});
