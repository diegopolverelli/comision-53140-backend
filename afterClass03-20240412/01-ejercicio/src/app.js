const path=require('path');
const express=require('express');
const engine=require('express-handlebars').engine
const {router:vistasRouter} =require("./routes/vistas.router")

const {Server} =require("socket.io");
const { router:heroesRouter } = require('./routes/heroes.router');

const PORT=3000;

const app=express();
let io

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

app.use("/api/heroes", (req, res, next)=>{
    req.io=io

    next()
}, heroesRouter)
app.use("/", vistasRouter)

const server=app.listen(PORT,()=>{   // server HTTP
    console.log(`Server escuchando en puerto ${PORT}`);
});

io=new Server(server)    // server Websockets

// module.exports={io}

// io.on("connection", socket=>{
//     console.log(`Se conecto...`)
// })

// io.emit("nuevoHeroe", heroe)