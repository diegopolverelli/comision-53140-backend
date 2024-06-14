import { UsuariosDAO } from "../dao/UsuariosDAO.js";

const usuariosService=new UsuariosDAO()

export const getUsers=async(req, res)=>{

    // let usuarios="todos los usuarios"
    let usuarios=await usuariosService.get()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuarios});

}

export const createUser=async(req, res)=>{
    let {nombre, email}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre / email`})
    }

    // validar existencia de usuario (usuario repetido)
    let existe=await usuariosService.getOneBy({email})
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ya existe un usuario con email ${email}`})
    }

    try {
        // let nuevoUsuario=`nuevo usuario ${nombre}`
        let nuevoUsuario=await usuariosService.create({nombre, email})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoUsuario});
        
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                // detalle:`${error.message}`
            }
        )
    }
}