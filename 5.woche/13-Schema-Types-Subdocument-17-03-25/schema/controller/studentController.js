import Student from "../models/Student.js";

const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        if (!students || students.length === 0) {
            return res.status(404).json({ msg: "Öğrenci bulunamadı." });
        }
        res.status(200).json(students);
    } catch (err) {
        console.error("❌ Öğrencileri çekerken hata oluştu:", err);
        res.status(500).json({ msg: "Sunucu hatası!" });
    }
};


const addStudent = async (req, res) => {
    try {
        const { fullName, age, className, hobbies, address } = req.body;

        // Eksik alanları kontrol et
        if (!fullName || !age) {
            return res.status(400).json({ msg: "fullName ve age alanları zorunludur!" });
        }

        const newStudent = new Student({ fullName, age, className, hobbies, address });
        await newStudent.save();

        res.status(201).json(newStudent);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};


export {getStudents, addStudent};