import express from "express";
import requestLogger from "../middleware/requestLogger.js";
import {
  addUser,
  deleteUser,
  editUser,
  getUsers,
} from "../controller/userController.js";

const router = express.Router();

// router
//   .get("/", (req, res) => {
//     res.json(users);
//   })
//   .post("/", (req, res) => {
//     const { name, age } = req.body;
//     const newUser = { id: users.length + 1, name, age };
//     users.push(newUser);
//     res.json(newUser);
//   });

router.route("/").get(requestLogger, getUsers).post(addUser);

router.route("/:id").patch(editUser).delete(deleteUser);

export default router;
