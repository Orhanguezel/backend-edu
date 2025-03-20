import { faker } from "@faker-js/faker";
import "./utils/connect.js";
import mongoose from "mongoose";
import { User } from "./models/User.js";
import { Post } from "./models/Post.js";
async function seedData() {
  await User.deleteMany({});
  await Post.deleteMany({});

  // Insert users
  const user1 = await User.create({ name: "Jane Doe" });
  const user2 = await User.create({ name: "John Doe" });

  // Insert Posts for Jane
  const p1 = await Post.create({ owner: user1._id, content: "Hello, world!" });
  const p2 = await Post.create({ owner: user1._id, content: "Hello, again!" });

  // Insert Posts for John
  const p3 = await Post.create({ owner: user2._id, content: "I am John!" });
  const p4 = await Post.create({
    owner: user2._id,
    content: "I am John, again!",
  });

  // Add posts to users to complete the relationship
  user1.posts.push(p1);
  user1.posts.push(p2);
  await user1.save();

  user2.posts.push(p3);
  user2.posts.push(p4);
  await user2.save();

  console.log("Seed complete!", { user1 });
  await mongoose.connection.close();
}

seedData();
