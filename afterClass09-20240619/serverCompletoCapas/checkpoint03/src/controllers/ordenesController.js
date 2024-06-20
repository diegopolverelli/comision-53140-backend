import { NegociosDAO } from "../dao/NegociosDAO.js";
import { OrdenesDAO } from "../dao/OrdenesDAO.js";
import { UsuariosDAO } from "../dao/UsuariosDAO.js";

const ordenesService=new OrdenesDAO()
const usuariosService=new UsuariosDAO()
const negociosService=new NegociosDAO()


export const getOrdenes=async (req, res)=>{
    // let ordenes="todas las ordenes"
    let ordenes = await ordenesService.get()
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({ordenes});
}

// pedido:[{id:1, cantidad:2}, {id:3, cantidad:1}]
export const createOrden=async(req, res)=>{
    let {uid, nid, pedido}=req.body
    if(!uid || !nid || !pedido){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete los datos`})
    }

    if(!Array.isArray(pedido)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El pedido tiene un formato inválido`})
    }

    // validar existencia usuario
    let usuario=await usuariosService.getOneBy({_id: uid})
    if(!usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existen usuarios con id ${uid} en BD`})
    }

    // validar existencia negocio
    let negocio=await negociosService.getOneBy({_id:nid})
    if(!negocio){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existen negocios con id ${nid} en BD`})
    }

    // completar pedido con datos de los productos del negocio
    // pedido:[{id:1, cantidad:2}, {id:3, cantidad:1}]
    let total=0
    let error=false
    let detalleError=[]
    pedido.forEach(i=>{
        // producto=await
        let producto=negocio.productos.find(p=>p.id===i.id)
        if(producto){
            i.descrip=producto.descrip
            i.precio=producto.precio
            i.subtotal=producto.precio*i.cantidad
            total+=i.subtotal
        }else{
            error=true
            detalleError.push(`No existe el ítem ${i.id} en el negocio ${negocio.nombre}`)
        }
    })

    if(error){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:detalleError})
    }

    console.log(pedido)
    console.log({total})

    // generar total, nroOrden, fecha
    let nroOrden=new Date().getTime()
    let fecha=new Date()

    try {
        // let nuevaOrden="nueva OC de pedido"
        let nuevaOrden=await ordenesService.create(
            {
                nroOrden, 
                fecha,
                usuario: uid, 
                negocio: nid,
                pedido, 
                total
            }
        )
        // actualizar usuario, con el nro de orden generado (actualizar el historial de pedidos del usuario)
        usuario.ordenes.push({
            orden: nuevaOrden._id
        })
        await usuariosService.update(uid, usuario)
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevaOrden});
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
            }
        )
    }
}