import express from "express";
import fs from "fs";

const app = express();

app.use(express.json());
const playersFilePath="./player.json";

app.get("/player", (req, res) => {
  const data = fs.readFileSync("playersFilePath", "utf-8");
  res.send(data);
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
