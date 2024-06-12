import { Router } from 'express';
import usuariosController from '../controllers/usuariosController.js';
export const router=Router()


router.get('/',usuariosController.getUsers)
router.get('/:id',usuariosController.getUserById)
router.get('/email/:email',usuariosController.getUserByEmail)
router.post('/', usuariosController.postUser)