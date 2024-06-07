// import { UsuariosMemoryDAO as UsuariosDAO } from "../DAO/UsuariosMemoryDAO.js"
// const usuariosDAO=new UsuariosDAO()

import { usuariosService } from "../services/UsuariosService.js"

export class UsuariosController{
    static getUsers=async(req,res)=>{

        // let usuarios="recupera usuarios"    
        // let usuarios=await usuariosDAO.getAll()
        let usuarios=await usuariosService.getUsers()
    
        res.setHeader('Content-Type','application/json')
        res.status(200).json({usuarios})
    }

    static createUser=async(req,res)=>{
        let {nombre, email, rol, ...otros}=req.body
        if(!email || !nombre){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Complete al menos nombre / email`})
        }

        let existe=await usuariosService.getUserByEmail(email)
        if(existe){
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existen usuarios con email ${email}...!!!`})
        }
        // validaciones / procesos, etc... siempre dentro de capa Controller / Negocio

        try {
            // let nuevoUsuario=await usuarioModelo.create()
            // let nuevoUsuario=await usuariosDAO.create({email, nombre, rol, ...otros})  
            let nuevoUsuario=await usuariosService.createUser({email, nombre, rol, ...otros})  
        
            res.setHeader('Content-Type','application/json')
            res.status(201).json({nuevoUsuario})
            
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
    }

    saludo(){
        console.log("hola")
    }
}