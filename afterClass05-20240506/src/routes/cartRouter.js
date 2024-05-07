import { Router } from 'express';
import mongoose, { isValidObjectId } from 'mongoose';
import { CartManager } from '../dao/CartManager.js';
import { ProductManager } from '../dao/ProductManager.js';
export const router=Router()

const cartManager=new CartManager()
const productManager=new ProductManager()

router.get("/:cid", async(req, res)=>{
    let {cid}=req.params
    if(!isValidObjectId(cid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese cid / pid válidos`})
    }

    let carrito=await cartManager.getOneByPopulate({_id:cid})
    if(!carrito){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Carrito inexistente: id ${cid}`})
    }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({carrito});
})

router.post('/:cid/product/:pid',async(req,res)=>{

    let {cid, pid}=req.params
    if(!isValidObjectId(cid) || !isValidObjectId(pid)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese cid / pid válidos`})
    }

    let carrito=await cartManager.getOneBy({_id:cid})
    if(!carrito){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Carrito inexistente: id ${cid}`})
    }

    let producto=await productManager.getOneBy({_id:pid})
    if(!producto){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existe producto con id ${pid}`})
    }

    console.log(carrito)
    let indiceProducto=carrito.productos.findIndex(p=>p.producto==pid)
    if(indiceProducto===-1){
        carrito.productos.push({
            producto: pid, cantidad:1
        })
    }else{
        carrito.productos[indiceProducto].cantidad++
    }

    let resultado=await cartManager.update(cid, carrito)
    if(resultado.modifiedCount>0){
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"Carrito actualizado"});
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`No se pudo realizar la actualizacion`
            }
        )
        
    }


    

})