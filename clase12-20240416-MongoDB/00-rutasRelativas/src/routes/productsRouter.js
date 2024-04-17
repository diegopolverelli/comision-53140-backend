import { Router } from 'express';
import { ProductManager } from '../dao/products/ProductManager.js';
export const router=Router()

const productManager=new ProductManager("./src/data/products.json")

router.get('/',(req,res)=>{

    let productos=productManager.getAll()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({productos})
})