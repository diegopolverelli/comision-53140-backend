import __dirname from './utils.js';
import mongoose from "mongoose"
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import { Server } from "socket.io";

import { router as vistasRouter } from './routes/vistasRouter.js';
import { mensajesModelo } from './dao/models/mensajes.model.js';

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
// let mensajes=[]

const server=app.listen(PORT,()=>{   // server http
    console.log(`Server escuchando en puerto ${PORT}`);
});

const io=new Server(server)   // server websocket

io.on("connection", socket=>{
    console.log(`Se ha conectado un cliente con id ${socket.id}`)

    socket.on("id", async(nombre)=>{
        usuarios.push({id:socket.id, nombre})
        let mensajes=await mensajesModelo.find().lean()
        mensajes=mensajes.map(m=>{
            return {nombre: m.email, mensaje: m.mensaje}
        })
        socket.emit("mensajesPrevios", mensajes)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

    socket.on("mensaje", async(nombre, mensaje)=>{
        // mensajes.push({nombre, mensaje})
        await mensajesModelo.create({email:nombre, mensaje})
        io.emit("nuevoMensaje", nombre, mensaje)
    })

    socket.on("disconnect", ()=>{
        let usuario=usuarios.find(u=>u.id===socket.id)
        if(usuario){
            io.emit("saleUsuario", usuario.nombre)
        }
    })

})



const connDB=async()=>{
    try {
        // await mongoose.connect("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase14")
        await mongoose.connect(
            "mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            {
                dbName:"clase14"
            }
        )
        console.log("DB Online...!!!")

    } catch (error) {
        console.log("Error al conectar a DB", error.message)
    }
}


connDB()