import { model, Schema } from "mongoose";

const postSchema = new Schema({
  content: String,
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Post = model("Post", postSchema);
