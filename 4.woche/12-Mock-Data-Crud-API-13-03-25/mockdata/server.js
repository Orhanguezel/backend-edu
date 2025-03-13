import express from 'express';
import dotenv from 'dotenv';
import connect from './utils/connect.js';
import Student from './models/Student.js';

dotenv.config();
connect(); 

const app = express();
app.use(express.json());

const PORT = process.env.PORT ;

app.get('/students',async (req, res) => {
    try {
        const students = await Student.find();
        res.status(201).json(students);
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
});

app.post('/students', async (req, res) => {
    try {
        const student = await Student.create(req.body);
        res.status(201).json(student);
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}
);

app.delete('/students/:id', async (req, res) => {
    try {
        const{id} = req.params;
        const student = await Student.deleteOne({_id:id});
        res.status(201).json(student);
        console.log('Student deleted');
        
    } catch (error) {
        res.status(500).json({message: error.message});
        
    }
}
);


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
