import { Router } from 'express';
import { ProductManager } from '../dao/ProductManager.js';
import { auth } from '../middleware/auth.js';
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

router.post("/", auth, async(req, res)=>{
    let {descripcion, codigo, precio, stock}=req.body
    if(!descripcion || !codigo || !precio){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete descripcion, codigo, precio`})
    }

    // validaciones varias...
    let existe=await productManager.getOneBy({codigo})
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ya existen productos con codigo ${codigo}`})
    }

    try {
        let nuevoProducto=await productManager.create({codigo, descripcion, precio, stock})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({mensaje:"Producto agregado", nuevoProducto});
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