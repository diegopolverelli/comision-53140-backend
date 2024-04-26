import { Router } from "express";
import { UsuariosManagerMONGO as UsuariosManager } from "../dao/UsuariosManagerMONGO.js";
import { generaHash } from "../utils.js";
import { isValidObjectId } from "mongoose";
export const router=Router()

const usuariosManager=new UsuariosManager()

router.get('/',async(req,res)=>{

    try {
        let usuarios=await usuariosManager.getUsuarios()
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuarios});        
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
        
    }

})

// router.get("/email/:email", (... )

router.get('/:id',async(req,res)=>{

    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id valido de MongoDB como argumento para busqueda`})
    }

    try {
        let usuario=await usuariosManager.getUsuarioBy({_id:id})
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuario});        
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
        
    }

})

router.post('/',async(req, res)=>{
    let {nombre, email, apellido, password}=req.body
    if(!nombre || !email || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos: nombre, email y password son obligatorios...!!!`})
    }

    // let usuarios=usuariosManager.getUsuarios()
    // let existe=usuarios.find(u=>u.email===email) 
    let existe
    try {
        existe =await usuariosManager.getUsuarioBy({email})
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }   

    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El usuario con email ${email} ya existe en BD...!!!`})
    }

    try {
        let nuevoUsuario=await usuariosManager.addUsuario({nombre, email, apellido, password:generaHash(password)})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({payload:nuevoUsuario});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )  
    }

})

router.put("/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id valido de MongoDB como argumento para busqueda`})
    }

    let aModificar=req.body
    if(aModificar._id){
        delete aModificar._id
    }

    if (aModificar.email){
        let existe
        try {
            existe=await usuariosManager.getUsuarioBy({_id:{$ne:id}, email:aModificar.email})
            if(existe){
                res.setHeader('Content-Type','application/json');
                return res.status(400).json({error:`Ya existe otro usuario en DB con email ${aModificar.email}`})
            }
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json(
                {
                    error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                    detalle:`${error.message}`
                }
            )
        }
    }

    if(aModificar.password){
        aModificar.password=generaHash(aModificar.password)
    }

    try {
        let usuarioModificado=await usuariosManager.updateUser(id, aModificar)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuarioModificado});
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
        
    }
})

router.delete("/:id", async(req, res)=>{
    let {id}=req.params
    if(!isValidObjectId(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese un id valido de MongoDB como argumento para busqueda`})
    }

    try {
        let resultado=await usuariosManager.deleteUser(id)
        if(resultado.deletedCount>0){
            res.setHeader('Content-Type','application/json');
            return res.status(200).json({payload:`Usuario con id ${id} eliminado`});
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(404).json({error:`No existen usuario con id ${id} / o error al eliminar`})
        }
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
        
    }

})