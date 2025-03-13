import { faker } from "@faker-js/faker";
import Student from "./models/Student.js";
import connect from "./utils/connect.js";
import mongoose from "mongoose";

async function seedData() {
  await connect();
  await Student.deleteMany({});

  for (let i = 0; i < 20; i++) {
    const student = new Student({
      name: faker.person.fullName(),
      class: faker.word.noun(),
      age: faker.number.int({ min: 18, max: 25 }),
      email: faker.internet.email(),
    });
    await student.save();
  }
  console.log("Created and Saved successfuly!");
  await mongoose.connection.close();
}

seedData();
