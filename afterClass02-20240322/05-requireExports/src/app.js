// const express=require("express")
import express from "express"
// const UserManager=require("./classes/UserManager")
import UserManager from "./classes/UserManager.js"

const PORT=3000
const app=express()

const userManager=new UserManager("./src/data/usuarios.json")

app.get("/usuarios", async(req, res)=>{

    // let limit=req.query.limit

    let {limit, skip, nombre}=req.query

    console.log(skip, nombre)

    let usuarios=await userManager.leerUsuarios()
    if(limit){
        usuarios=usuarios.slice(0, limit)
    }

    res.json(usuarios)

})

app.get("/usuarios/:id", async(req, res)=>{

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


app.listen(PORT, ()=>console.log(`Server online en puerto ${PORT}`))