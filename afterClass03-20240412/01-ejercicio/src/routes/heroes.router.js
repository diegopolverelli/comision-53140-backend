// const { io } = require('../app');
const HeroesManager = require('../dao/HeroesManger');

const Router=require('express').Router;
const router=Router()

const heroesManager=new HeroesManager()

router.get('/',(req,res)=>{

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

    res.setHeader('Content-Type','application/json')
    res.status(200).json({heroes})
})

router.post("/", (req, res)=>{
    let {name, ...otras}=req.body
    if(!name){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete propiedad "name"`})
    }

    let existe=heroesManager.getByName(name)
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ya existe ${name} en la BD`})
    }

    let nuevoHeroe
    try {
        nuevoHeroe=heroesManager.create({
            name, ...otras
        })
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
            }
        )
    }
    
    req.io.emit("nuevoHeroe", name)

    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:"heroe Creado", nuevoHeroe});

})

router.delete("/:id", (req, res)=>{
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Id debe ser numerico`})
    }

    let heroeEliminado
    try {
        heroeEliminado=heroesManager.delete(id)
    } catch (error) {
        console.log(error)
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
            }
        )
    }

    let heroes=heroesManager.getAll()
    req.io.emit("heroeBorrado", heroes)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({heroeEliminado});

})


module.exports={router}