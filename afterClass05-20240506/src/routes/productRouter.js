import { Router } from 'express';
import { ProductManager } from '../dao/ProductManager.js';
export const router=Router()

const productManager=new ProductManager()

router.get('/',async(req,res)=>{

    try {
        let productos=await productManager.getAll()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({productos})
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }

})