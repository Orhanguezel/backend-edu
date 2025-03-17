import { Student } from "../models/Student.js";

const getStudents = async (req, res) => {
  const students = await Student.find({});
  res.json(students);
};

const addStudent = async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.json({ msg: "Student added successfuly!", newStudent });
  } catch (error) {
    res.json({ error });
  }
};

export { getStudents, addStudent };
