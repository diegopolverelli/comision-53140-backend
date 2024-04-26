import { Router } from 'express';
import { HeroesManagerMongo as HeroesManager} from '../dao/HeroesManagerMongo.js';
export const router=Router()

let heroesManager=new HeroesManager()

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