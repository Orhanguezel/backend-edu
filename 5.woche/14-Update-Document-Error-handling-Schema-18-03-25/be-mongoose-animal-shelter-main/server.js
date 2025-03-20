import express from "express";
import * as db from "./db.js";
import "dotenv/config.js";
import cors from "cors";
import Animal from "./models/Animal.js";

const app = express();
const port = process.env.PORT || 3000;
db.connect();

app.use(express.json());
app.use(cors());

app.get("/animals", async (req, res) => {
  const animals = await Animal.find();
  res.json(animals);
});

app.post("/animal", async (req, res) => {
  const newAnimal = new Animal(req.body);
  await newAnimal.save();
  res.json(newAnimal);
});

app.put("/animal/:id", async (req, res) => {
  const { id } = req.params;
  const opt = { runValidators: true, new: true };
  try {
    const updatedAnimal = await Animal.replaceOne({ _id: id }, req.body, opt);
    res.json(updatedAnimal);
  } catch (error) {
    res.json(error);
  }
});

app.patch("/animal/:id", async (req, res) => {
  const { id } = req.params;
  const opt = { runValidators: true, new: true };

  const updatedAnimal = await Animal.findByIdAndUpdate(id, req.body, opt);
  res.json(updatedAnimal);
});

app.delete("/animal/:id", async (req, res) => {
  const { id } = req.params;

  const animal = await Animal.findByIdAndDelete(id);
  res.json(animal);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
