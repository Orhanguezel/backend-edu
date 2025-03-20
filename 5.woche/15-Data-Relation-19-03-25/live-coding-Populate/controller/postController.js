import { User } from "../models/User.js";
import { Post } from "../models/Post.js";

export const getPostWithOwner = async (req, res, next) => {
  const { id } = req.params;

  const post = await Post.findById(id).populate("owner");
  res.json(post);
};
