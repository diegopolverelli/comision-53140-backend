import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
export const router=Router()

let heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

    let heroes=heroesManager.getAll()

    res.status(200).json({heroes})
})

router.get('/:id',(req,res)=>{

    let heroe=heroesManager.getById(+req.params.id)

    res.status(200).json({heroe})
})

router.post("/",(req, res)=>{
    let {name, ...otros}=req.body
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete name`})
    }

    let existe=heroesManager.getByName(name)
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ya existe el heroe ${name}`})
    }

    try {
        let nuevoHeroe=heroesManager.create({name, ...otros})
    
        res.setHeader('Content-Type','application/json');
        return res.status(201).json(nuevoHeroe);
        
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