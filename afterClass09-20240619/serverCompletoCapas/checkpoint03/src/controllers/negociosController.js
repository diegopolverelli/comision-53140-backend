import { NegociosDAO } from "../dao/NegociosDAO.js";

const negociosService=new NegociosDAO()

export const getNegocios=async(req, res)=>{

    // let negocios="todos los negocios"
    let negocios = await negociosService.get()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({negocios});

}

export const createNegocio=async(req, res)=>{
    let {nombre, productos}=req.body
    if(!nombre || !productos || !Array.isArray(productos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre / productos (format array)`})
    }

    // validar existencia de negocio (negocio repetido)
    let existe=await negociosService.getOneBy({nombre})
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El negocio ${nombre} ya existe en BD`})
    }

    // otras validaciones pertinentes...

    try {
        // let nuevoNegocio=`nuevo negocio ${nombre}`
        let nuevoNegocio=await negociosService.create({nombre, productos})
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoNegocio});
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