import express from "express";
import { getBlog, getBlogById } from "../controllers/blogController.js";
const router = express.Router();


router.route("/").get(getBlog);
router.route("/:id").get(getBlogById);

export default router;
