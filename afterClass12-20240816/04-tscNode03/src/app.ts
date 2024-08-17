import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req, res)=>{


    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/prueba',(req, res)=>{


    res.setHeader('Content-Type','text/plain');
    res.status(200).send('ruta prueba');
})

app.get('/prueba2',(req:Request, res:Response)=>{

    let nombre:string="Juan"

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('ruta prueba 2 '+nombre );
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const connDB=async()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "afterClass12"
        }
        )
        console.log("DB online")
    } catch (error) {
        console.log(`Error al conectar a DB: ${error}`)
    }
}
connDB()
