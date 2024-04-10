import express from 'express';
import { Server } from "socket.io"
import { router as heroesRouter } from './routes/heroesRouter.js';
const PORT=3000;

const app=express();
let serverSocket

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

// app.use('/api/heroes', heroesRouter)
app.use(
    '/api/heroes', 
    (req, res, next)=>{
        req.codigo="007"
        req.serverSocket=serverSocket
        next()
    },  
    heroesRouter
)



const serverHTTP=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

//export const io=new Server(serverHTTP)
serverSocket=new Server(serverHTTP)

serverSocket.on("connection", socket=>{
    console.log(`Se conecto un cliente con id ${socket.id}`)

    socket.emit("saludo", "Bienvenido...!!! identificate...")

    socket.on("id", nombre=>{
        console.log(`El cliente con id ${socket.id} se ha identificado como ${nombre}`)
        socket.broadcast.emit("nuevoUsuario", nombre)
    })

    socket.on("nuevoMensaje", (nombre, mensaje)=>{
        serverSocket.emit("mensaje", nombre, mensaje)
    })
}) // fin on connection

let temperatura=0
setInterval(() => {
    // fetch api clima
    temperatura=Math.floor(Math.random()*(6)+28)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    serverSocket.emit("nuevaLecturaTemperatura", temperatura)
    // console.log(temperatura)
}, 1000);

