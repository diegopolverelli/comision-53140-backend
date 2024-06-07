import { JuguetesMemoryDAO as JuguetesDAO } from "../DAO/JuguetesMemoryDAO.js"

export const getJuguetes=async(req,res)=>{

    // let juguetes="todos los juguetes"
    let juguetes=await JuguetesDAO.getAll()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({juguetes})
}

export const createJuguete=async(req,res)=>{
    let {codigo, descrip, precio, ...otros}=req.body
    if(!codigo || !descrip){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete datos`})
    }

    // validaciones

    // let nuevoJuguete="nuevo juguetes"
    let nuevoJuguete=await JuguetesDAO.create({codigo, descrip, precio, ...otros})

    res.setHeader('Content-Type','application/json')
    res.status(200).json({nuevoJuguete})
}