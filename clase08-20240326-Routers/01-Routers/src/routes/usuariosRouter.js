import { Router } from 'express';
import UserManager from "../dao/UserManager.js"
export const router=Router()

// router.get('/',(req,res)=>{

//     res.setHeader('Content-Type','application/json')
//     res.status(200).json({})
// })

const userManager=new UserManager("./src/data/usuarios.json")

router.get("/", async(req, res)=>{

    // let limit=req.query.limit

    let {limit, skip, nombre}=req.query

    console.log(skip, nombre)

    let usuarios=await userManager.leerUsuarios()
    if(limit){
        usuarios=usuarios.slice(0, limit)
    }

    res.json(usuarios)

})

router.get("/:id", async(req, res)=>{

    let id=req.params.id
    // validar que sea numerico...
    id=Number(id)  // "100"
    if(isNaN(id)){
        return res.json({error:`Ingrese un id numérico...!!!`})
    }

    try {
        let usuario=await userManager.leerById(id)
        if(!usuario){
            return res.json({message:`No existen usuarios con id ${id}`})
        }
    
        return res.json(usuario)
    } catch (error) {
        console.log(error)
        return res.json({error:"Error desconocido...!!!"})
    }



})

router.post("/", async(req, res)=>{
    let {nombre, email} = req.body
    // validacion
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre / email`})
    }

    // resto validaciones 
    try {
        let nuevoUsuario=await userManager.addUsuario({nombre, email}) 

        res.setHeader('Content-Type','application/json');
        return res.status(200).json(nuevoUsuario);

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

    let id=req.params.id
    // validar que sea numerico...
    id=Number(id)  // "100"
    if(isNaN(id)){
        return res.json({error:`Ingrese un id numérico...!!!`})
    }

    // recuperar info desde body
    // validar 

    try {
        let usuarioModificado=await userManager.update(id, {})
        res.setHeader('Content-Type','application/json');
        return res.status(200).json(usuarioModificado);
    
    } catch (error) {
        console.log(error)
        return res.json({error:"Error desconocido...!!!"})
    }



})

router.delete("/:id", async(req, res)=>{

    let id=req.params.id
    // validar que sea numerico...
    id=Number(id)  // "100"
    if(isNaN(id)){
        return res.json({error:`Ingrese un id numérico...!!!`})
    }

    try {
        let usuarioEliminado=await userManager.delete(id)
        res.setHeader('Content-Type','application/json');
        return res.status(200).json(usuarioEliminado);
    
        return res.json(usuario)
    } catch (error) {
        console.log(error)
        return res.json({error:"Error desconocido...!!!"})
    }



})
