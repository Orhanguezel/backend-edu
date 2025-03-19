import { User } from "../models/User.js";
const opt = {
  runValidators: true,
  new: true,
};
const getUsers = async (req, res, next) => {
  // https://mongoosejs.com/docs/api/model.html#Model.find()
};
const addUser = async (req, res, next) => {
  try {
    const { name, age, email } = req.body;
    // https://mongoosejs.com/docs/api/model.html#Model.create()

    const newUser = new User({ name, age, email });
    await newUser.save();
    res.json({ msg: "User added successfuly!", newUser });
  } catch (error) {
    return next(error);
  }
};

const replaceUser = async (req, res, next) => {
  // Replace the old Product completely
  // https://mongoosejs.com/docs/api/model.html#Model.replaceOne()
};

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });
    console.log(updatedUser);
    res.json({ msg: "user edited successfuly!" });
  } catch (error) {
    return next(error);
  }
};

const deleteUser = async (req, res, next) => {};

const deleteUsers = async (req, res, next) => {};

export { getUsers, addUser, replaceUser, updateUser, deleteUser, deleteUsers };
