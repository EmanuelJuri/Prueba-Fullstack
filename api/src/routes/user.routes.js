import { Router } from "express";
import { getUser, getAllUsers, updateUser, deleteUser } from '../controllers/user.controller.js'

const router = Router();

router.get('/users', getAllUsers)

router.get('/user/:id', getUser)

router.put('/user/:id', updateUser)

router.delete('/user/:id', deleteUser)


export default router;