import { Router } from 'express';
import { createUser, getUsers } from '../controllers/usuariosController.js';
export const router=Router()

router.get('/', getUsers)
router.post("/", createUser)