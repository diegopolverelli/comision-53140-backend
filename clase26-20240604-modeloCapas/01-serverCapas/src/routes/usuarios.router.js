import { Router } from 'express';
import { UsuariosController } from '../controller/UsuariosController.js';
export const router=Router()

router.get('/', UsuariosController.getUsers)
router.post('/', UsuariosController.createUser)

// const usuariosController=new UsuariosController()
// usuariosController.saludo()