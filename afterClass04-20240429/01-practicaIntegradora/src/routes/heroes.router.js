import { Router } from 'express';
import { HeroesManagerMongo as HeroesManager} from '../dao/HeroesManagerMongo.js';
import mongoose from 'mongoose';
import { upload } from '../utils.js';
export const router=Router()

let heroesManager=new HeroesManager()

// await mongoose.connect()

router.get('/',async (req,res)=>{

    let heroes
    try {
        heroes=await heroesManager.getAll()
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }

    res.setHeader('Content-Type','application/json')
    res.status(200).json({heroes})
})

router.post("/", upload.single("imagen"), async(req, res)=>{

    let {name, ...otrasPropiedades}=req.body  // ... son el operador rest
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`name es requerido`})
    }

    let existe
    try {
        existe=await heroesManager.getOneBy({name})
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
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ya existe ${name} en BD`})
    }

    let thumbnail=undefined
    if(req.file){
        thumbnail=req.file
    }

    try {
        let nuevoHeroe=await heroesManager.create({name, ...otrasPropiedades, thumbnail})  // ... son el operador spread
        res.setHeader('Content-Type','application/json');
        return res.status(201).json({nuevoHeroe});
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

})