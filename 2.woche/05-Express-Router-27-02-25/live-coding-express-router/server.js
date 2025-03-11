import express from "express";
import userRouter from "./router/userRouter.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hallo World!!");
});

app.use("/users", userRouter);

app.listen(3000, () => {
  console.log("server work on port 3000!!");
});
