import { Router } from 'express';
import { createNegocio, getNegocios } from '../controllers/negociosController.js';
export const router=Router()

router.get('/', getNegocios)
router.post("/", createNegocio)