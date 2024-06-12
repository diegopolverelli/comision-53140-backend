import { usuariosService } from "../services/usuarios.service.js"


async function getUsers(req,res){

    try {
        let usuarios=await usuariosService.getUsers()
    
        return res.status(200).json({
            usuarios
        })
    } catch (error) {
        return res.status(500).json({
            error:"Error inesperado", detalle:error.message
        })
      
    }
}

async function getUserById(req,res){

    try {
        let usuario=await usuariosService.getUserById(req.params.id)
    
        return res.status(200).json({
            usuario
        })
    } catch (error) {
        return res.status(500).json({
            error:"Error inesperado", detalle:error.message
        })
      
    }
}


async function getUserByEmail(req,res){

    try {
        let usuario=await usuariosService.getUserByEmail(req.params.email)
    
        return res.status(200).json({
            usuario
        })
    } catch (error) {
        return res.status(500).json({
            error:"Error inesperado", detalle:error.message
        })
      
    }
}



async function postUser(req, res){
    let {nombre, email}=req.body
    if(!nombre || !email) return res.status(400).json({error:"Complete todos los datos"})

    
    try {
        // validar usuario existente...
        let existe=await usuariosService.getUserByEmail(email)
        // let existe=usuarios.find(u=>u.email===email)
        if(existe) return res.status(400).json({error:`Usuario con email ${email} existente en BD`})

        let usuarioNuevo=await usuariosService.createUser(nombre, email)
        return res.status(201).json({usuarioNuevo})
    } catch (error) {
        return res.status(500).json({
            error:"Error inesperado", detalle:error.message
        })
    }


}

export default {getUsers, postUser, getUserById, getUserByEmail}