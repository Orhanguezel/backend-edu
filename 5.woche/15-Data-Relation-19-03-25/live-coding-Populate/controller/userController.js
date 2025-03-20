import { User } from "../models/User.js";
import { Post } from "../models/Post.js";

const getUsers = async (req, res, next) => {
  // https://mongoosejs.com/docs/api/model.html#Model.find()
};
const addUser = async (req, res, next) => {
  // https://mongoosejs.com/docs/api/model.html#Model.create()
};

const getUserWithPosts = async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id).populate("posts");
  res.json(user);
};

const replaceUser = async (req, res, next) => {
  // Replace the old Product completely
  // https://mongoosejs.com/docs/api/model.html#Model.replaceOne()
};

const updateUser = async (req, res, next) => {};

const deleteUser = async (req, res, next) => {};

const deleteUsers = async (req, res, next) => {};

export {
  getUsers,
  addUser,
  replaceUser,
  updateUser,
  deleteUser,
  deleteUsers,
  getUserWithPosts,
};
