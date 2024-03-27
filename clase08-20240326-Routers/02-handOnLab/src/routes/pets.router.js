const PetsManager = require('../dao/PetsManager');

const Router=require('express').Router;
const router=Router()

// const express=require("express")
// const router=express.Router()
let petsManager=new PetsManager()

router.get('/',(req,res)=>{

    // contro errores, etc...
    let pets="Devuelve todas las mascotas" // petsManager.getAll()

    res.setHeader('Content-Type','application/json')
    res.status(200).json({pets})
})

router.post("/", (req, res)=>{

    let nuevoPet="Nuevo pet generado" // petsManager.create(pet)

    res.setHeader('Content-Type','application/json');
    return res.status(201).json(nuevoPet);
})

router.put("/:id", (req, res)=>{

    let {id}=req.params

    //validar id

    // sacar modificaciones del body, y validarlas
    // let {nombre, apellido}=req.body
    let aModificar=req.body

    let petModificado=`Pet ${id} modificado` // petsManager.update(id, aModificar)

    res.setHeader('Content-Type','application/json');
    return res.status(201).json(petModificado);
})

router.delete("/:id", (req, res)=>{

    let {id}=req.params

    //validar id


    let resultado=`Pet ${id} eliminado` // petsManager.delete(id)

    res.setHeader('Content-Type','application/json');
    return res.status(201).json(resultado);
})

module.exports=router