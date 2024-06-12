import express from 'express';
import { Singleton } from './Singleton.js';
import { usuariosModelo } from './model/usuariosModelo.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/usuarios',async(req,res)=>{

    Singleton.conectar("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", "clase14")
    let usuarios=await usuariosModelo.find().lean()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:usuarios});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

Singleton.conectar("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", "clase14")
