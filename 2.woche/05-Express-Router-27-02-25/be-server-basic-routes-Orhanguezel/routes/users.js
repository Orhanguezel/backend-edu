import express from "express";
import { getUser, getUserById } from "../controllers/userController.js";
const router = express.Router();


router.route("/").get(getUser);
router.route("/:id").get(getUserById);

export default router;
