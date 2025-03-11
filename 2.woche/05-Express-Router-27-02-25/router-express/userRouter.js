import express from 'express';
import { getUser, createUser, getUserById, deleteUser, editUser } from './userController.js';

const router = express.Router();


//router.route("/").get(getUser).post(createUser);
//router.route("/:id").get(getUserById).delete(deleteUser).patch(editUser);
router.get('/', getUser);
router.post('/', createUser);
router.get('/:id', getUserById);
router.delete('/:id', deleteUser);
router.patch('/:id', editUser);

export default router;