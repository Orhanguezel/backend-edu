import { Router } from "express";
import {
  addUser,
  deleteUsers,
  getUsers,
  getUserWithPosts,
} from "../controller/userController.js";

const router = Router();

router.route("/users").get(getUsers).post(addUser).delete(deleteUsers);

router.route("/users/:id").get(getUserWithPosts);

export default router;
