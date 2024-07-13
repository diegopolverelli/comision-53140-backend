import { Router } from 'express';
import mongoose, { isValidObjectId } from 'mongoose';
import { CartManager } from '../dao/CartManager.js';
import { ProductManager } from '../dao/ProductManager.js';
import { auth } from '../middleware/auth.js';
import { ticketModelo } from '../dao/models/ticketModelo.js';
import { enviarMail } from '../utils.js';
import { CustomError } from '../errors/CustomError.js';
import { EERRORES } from '../errors/EErrors.js';
export const router=Router()

const cartManager=new CartManager()
const productManager=new ProductManager()

router.get("/:cid", async(req, res, next)=>{
    try {

        if(req.query.error){
            console.log(asdfasdfasfd)
        }

        let {cid}=req.params
        if(!isValidObjectId(cid)){
            CustomError.generarError("Error cartController", `Carrito invalido`, `El id de carrito ${cid} no es valido`, EERRORES['BAD ARGUMENTS'])
            // res.setHeader('Content-Type','application/json');
            // return res.status(400).json({error:`Ingrese cid válido`})
        }
    
        let carrito=await cartManager.getOneByPopulate({_id:cid})
        if(!carrito){
            CustomError.generarError("Error cartController", `Carrito inexistente`, `El carrito con id ${cid} no existe en BD`, EERRORES['BAD ARGUMENTS'])
            // res.setHeader('Content-Type','application/json');
            // return res.status(400).json({error:`Carrito inexistente: id ${cid}`})
        }
    
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({carrito});
    } catch (error) {
        next(error)        
    }
})

router.get("/:cid/comprar", auth, async(req, res, next)=>{
    try {
        let {cid}=req.params
        if(!isValidObjectId(cid)){
            CustomError.generarError("Error cartController", `Carrito invalido`, `El id de carrito ${cid} no es valido`, EERRORES['BAD ARGUMENTS'])
            // res.setHeader('Content-Type','application/json');
            // return res.status(400).json({error:`Ingrese cid válido`})
        }
    
        let carrito=await cartManager.getOneBy({_id:cid})
        if(!carrito){
            CustomError.generarError("Error cartController", `Carrito inexistente`, `El carrito con id ${cid} no existe en BD`, EERRORES['BAD ARGUMENTS'])
            // res.setHeader('Content-Type','application/json');
            // return res.status(400).json({error:`Carrito inexistente: id ${cid}`})
        }
    
        if(carrito.productos.length===0){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`El carrito con id ${cid} no tiene ítems...`})
        }
    
        // console.log(carrito.productos)
        let conStock=[]
        let sinStock=[]
        let total=0
    
        for(let i=0; i<carrito.productos.length; i++){
            let id=carrito.productos[i].producto
            let cantidad=carrito.productos[i].cantidad
            let producto=await productManager.getOneBy({_id:id})
            if(!producto || producto.stock<cantidad){
                sinStock.push(carrito.productos[i])
                if(producto.stock<cantidad){
                    console.log(`El producto ${producto.descripcion} no tiene stock suficiente: stock ${producto.stock} | cantidad: ${cantidad}`)
                }
            }else{
                conStock.push({
                    id, 
                    descripcion: producto.descripcion, 
                    precio: producto.precio,
                    stockPrevCompra: producto.stock,
                    stockPostCompra: producto.stock - cantidad,
                    cantidad, 
                    subtotal: cantidad*producto.precio
                })
                total+=cantidad*producto.precio
                // restar stock de productos...
                producto.stock=producto.stock-cantidad
                await productManager.update(id, producto)
            }
        }
    
        if(conStock.length===0){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`No existe ítems en condiciones de ser comprados en el carrito con id ${cid}. Verifique stock / códigos de producto.`})
        }
    
        carrito.productos=sinStock
        await cartManager.update(cid, carrito)
    
        let nroComp=Date.now()
        let fecha=new Date()
        let comprador=req.session.usuario?.email
        console.log(req.session.argentina)
    
        let ticket=await ticketModelo.create({
            nroComp, fecha, comprador, items: conStock, total
        })
    
        let message=`
    Hola ${req.session.usuario?.nombre}...!!!<br>
    Has registrado una compra con n° ticket ${nroComp}, por un importe de $ ${total}.<br>
    Detalle: ${JSON.stringify(conStock)}<br>
    ${sinStock.length>0?`Algunos ítems no pudieron comprarse... por favor consulte`:""}
    <br>
    Por favor contacte a <a href="mailto:pagos@julio.com">pagos</a> para finalizar la operación.<br>
    Gracias...!!!
    `
    
        let resultado=await enviarMail(comprador, `Tu compra está a un paso de concretarse...`, message)
        // if(resultado.accepted.length==0){}
    
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({ticket});
            
    } catch (error) {
        next(error)
    }
})

router.post('/:cid/product/:pid', auth, async(req,res)=>{

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

    if(producto.stock===0){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No hay stock de ${producto.descripcion}. Stock actual: ${producto.stock}`})
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