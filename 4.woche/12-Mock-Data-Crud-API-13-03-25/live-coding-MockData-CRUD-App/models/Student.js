import mongoose, { model } from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  class: String,
  age: Number,
  email: String,
});

const Student = model("Student", studentSchema);

export default Student;
