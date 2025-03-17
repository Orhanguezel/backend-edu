import express from 'express';
import {addStudent,getStudents} from '../controller/studentController.js';

const studentRouter=express.Router();

studentRouter.route('/')
  .get(getStudents)  
  .post(addStudent); 


export default studentRouter;