import { Router } from "express";
import {
  addUser,
  deleteUsers,
  getUsers,
  updateUser,
} from "../controller/userController.js";

const router = Router();

router.route("/users").get(getUsers).post(addUser).delete(deleteUsers);
router.route("/users/:id").patch(updateUser);

export default router;
