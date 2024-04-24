import { Router } from "express";
import { UsuariosManagerMONGO as UsuariosManager } from "../dao/UsuariosManagerMONGO.js";
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

router.post('/',(req, res)=>{
    let {nombre, email, apellido}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos: nombre y email obligatorios...!!!`})
    }

    let usuarios=usuariosManager.getUsuarios()

    let existe=usuarios.find(u=>u.email===email)    
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El usuario con email ${email} ya existe en BD...!!!`})
    }

    let nuevoUsuario=usuariosManager.addUsuario({nombre, email, apellido})
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:nuevoUsuario});

})