import { Router } from 'express';
import heroesController from '../controllers/heroesController.js';
export const router=Router()

router.get('/',heroesController.getHeroes)