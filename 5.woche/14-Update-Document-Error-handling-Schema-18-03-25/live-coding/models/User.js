import { model, Schema } from "mongoose";

const userSchema = new Schema({
  // {VALUE}, {PATH}, {KIND}
  name: {
    type: String,
    required: [true, "You have to enter the name!"],
    minlength: [4, "the name {VALUE} must be more the 4 character"],
  },
  age: {
    type: Number,
    min: [18, "{VALUE} is less than 18!"],
    max: [40, "{VALUE} is more than 40!"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email!!",
    ],
    // valid :test@example.com, test.user@exapmle.com
    // invalid : test@.com, test@example,
  },
});

export const User = model("User", userSchema);
