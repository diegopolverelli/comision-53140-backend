import { Router } from 'express';
import HeroesManager from '../manager/HeroesManager.js'
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

    req.logger.info("Prueba log info")
    req.logger.http("Prueba log http")
    req.logger.debug("Prueba log debug")
    req.logger.warn("Prueba log warn")
    req.logger.error("Prueba log error")

    let error=new Error("prueba de error")

    req.logger2.leve("Prueba error leve...")
    let errorData={
        name:error.name, 
        message:error.message,
        stack:error.stack
    }
    // req.logger2.grave(error.name+"\n"+error.message+"\n"+error.stack)
    req.logger2.grave(JSON.stringify(errorData, null, 5))

    res.status(200).render('home')
})

router.get('/heroes',(req,res)=>{


    let heroes
    try {
        heroes=heroesManager.getHeroes()
    } catch (error) {
        console.log(`Error al leer heroes: ${error.message}`)        
    }

    res.status(200).render('heroes', {
        heroes
    })
})