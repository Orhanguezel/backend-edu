import Student from "./models/Student.js";
import connect from "./utils/connect.js";
import mongoose from 'mongoose';
import {faker} from "@faker-js/faker";



async function seedDatabase() {
    await connect();
  try {
    await Student.deleteMany();

    for(let i=0; i<10; i++){
        const student = new Student({
            name: faker.person.fullName(),
            class: faker.word.noun(),
            age: faker.number.int({ min: 18, max: 25 }),
            email: faker.internet.email(),
        });
        await student.save();
    
    }
    console.log('✅ Mock data added to database');
    await mongoose.connection.close();
  }
    catch(error){
        console.error('❌ Error adding mock data to database:', error);
    }
}

seedDatabase();