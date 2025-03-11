import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
});

const User = model("User", userSchema);

export default User;
// User anstatt db.collection
