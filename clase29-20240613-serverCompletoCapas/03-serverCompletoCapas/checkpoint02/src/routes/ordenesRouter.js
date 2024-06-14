import { Router } from 'express';
import { createOrden, getOrdenes } from '../controllers/ordenesController.js';
export const router=Router()

router.get('/', getOrdenes)
router.post("/", createOrden)