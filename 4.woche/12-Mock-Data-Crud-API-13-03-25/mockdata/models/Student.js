import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: String,
    class:String,
    age:Number,
    email: String,
  },
);

const Student= mongoose.model("Student", studentSchema);
export default Student;