import express from "express";
import { addStudent, getStudents } from "../controller/studentsController.js";

const studentsRouter = express.Router();

studentsRouter.get("/", getStudents).post("/", addStudent);

export default studentsRouter;
