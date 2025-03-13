import express from "express";
import "dotenv/config.js";
import connect from "./utils/connect.js";
import Student from "./models/Student.js";

connect();
const app = express();

app.use(express.json());

const port = process.env.PORT;

app.get("/students", async (req, res) => {
  try {
    const students = await Student.find({});
    res.json(students);
  } catch (error) {
    console.log(error);
  }
});

app.post("/addStudent", async (req, res) => {
  const student = req.body;
  try {
    const newStudent = await Student.create(student);
    res.json(newStudent);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/deleteStudent/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);

    await Student.deleteOne({ _id: id });
    res.json({ message: "Student deleted successfuly!" });
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log(`server working on ${port} port!`);
});
