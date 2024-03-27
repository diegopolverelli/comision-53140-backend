// const express=require("express")
import express from "express"
import { router as usuariosRouter } from "./routes/usuariosRouter.js"
// const UserManager=require("./classes/UserManager")

const PORT=3000
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/usuarios", usuariosRouter)


app.listen(PORT, ()=>console.log(`Server online en puerto ${PORT}`))