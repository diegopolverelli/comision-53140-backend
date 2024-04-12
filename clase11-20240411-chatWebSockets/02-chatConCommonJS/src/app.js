// import __dirname from './utils.js';
// import path from 'path';
const path = require("path")
// import express from 'express';
const express= require("express")
// import {engine} from 'express-handlebars';
const {engine} =require("express-handlebars")
// import { Server } from "socket.io";
const {Server} = require("socket.io")

// import { router as vistasRouter } from './routes/vistasRouter.js';
const vistasRouter=require("./routes/vistasRouter").router

const PORT=3000;

const app=express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

app.use('/', vistasRouter)

let usuarios=[]
let mensajes=[]

const server=app.listen(PORT,()=>{   // server http
    console.log(`Server escuchando en puerto ${PORT}`);
});

const io=new Server(server)   // server websocket

io.on("connection", socket=>{
    console.log(`Se ha conectado un cliente con id ${socket.id}`)

    socket.on("id", nombre=>{
        usuarios.push({id:socket.id, nombre})
        socket.emit("mensajesPrevios", mensajes)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

    socket.on("mensaje", (nombre, mensaje)=>{
        mensajes.push({nombre, mensaje})
        io.emit("nuevoMensaje", nombre, mensaje)
    })

    socket.on("disconnect", ()=>{
        let usuario=usuarios.find(u=>u.id===socket.id)
        if(usuario){
            io.emit("saleUsuario", usuario.nombre)
        }
    })

})

let nombre="Juan"
module.exports={nombre}

