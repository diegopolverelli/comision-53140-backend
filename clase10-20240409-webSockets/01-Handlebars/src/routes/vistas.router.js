import { Router } from 'express';
import { HeroesManager } from '../dao/HeroesManager.js';
export const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/html');
    res.status(200).render('inicio', {titulo:"Home Page"});
})

router.get('/heroes',(req,res)=>{

    let {detalle, nombre}= req.query

    let heroes=heroesManager.getAll()
    let numero=Math.floor(Math.random()*(20)+0)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    let heroeDelDia=heroes[numero]

    res.setHeader('Content-Type','text/html');
    res.status(200).render('heroes', {
        heroeDelDia,
        heroes,
        detalle, 
        nombre, titulo:"Heroes page"
    });
})