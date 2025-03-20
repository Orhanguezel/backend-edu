import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
});

export const User = model("User", userSchema);
