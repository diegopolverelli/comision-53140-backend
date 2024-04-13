const HeroesManager = require('../dao/HeroesManger');

const Router=require('express').Router;
const router=Router()

let heroesManager=new HeroesManager()

router.get('/',(req,res)=>{


    res.setHeader('Content-Type','text/html');
    res.status(200).render('home');
})

router.get('/heroes',(req,res)=>{

    let heroes
    try {
        heroes=heroesManager.getAll()
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
            }
        )
        
    }
    
    res.setHeader('Content-Type','text/html');
    res.status(200).render('realTime',{
        heroes
    });
})

module.exports={router}