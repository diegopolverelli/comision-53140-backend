import { Router } from 'express';
import { createJuguete, getJuguetes } from '../controller/juguetesController.js';
export const router=Router()

router.get('/',getJuguetes)
router.post("/", createJuguete)

// class Varios{
//     static prueba(){
//         console.log("Prueba")
//     }
// }

// Varios.prueba()