import { Router } from "express";
import { getPostWithOwner } from "../controller/postController.js";

const router = Router();

router.route("/post/:id").get(getPostWithOwner);

export default router;
