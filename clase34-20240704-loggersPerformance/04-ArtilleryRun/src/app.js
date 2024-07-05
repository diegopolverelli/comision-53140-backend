import express from 'express';
import { router as sessionsRouter } from './routes/sessionsRouter.js';
import {fakerES_MX as faker} from '@faker-js/faker'
import cookieParser from "cookie-parser"
import mongoose from 'mongoose';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())

app.use('/api/sessions', sessionsRouter)

app.get('/usuario',(req,res)=>{
    let nombre=faker.person.firstName()
    let apellido=faker.person.lastName()
    let email=faker.internet.email({firstName:nombre, lastName:apellido})
    let password=faker.internet.password({length:6, memorable:true})

    let usuario={nombre, apellido, email, password}

    console.log(`Se generó el usuario ${nombre} ${apellido}, con email: ${email}`)
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuario});
})

app.get('/prueba',(req,res)=>{

    let heroes=[
        {
            id:1,
            name:'Spider-Man',
            alias:'Peter Parker',
            team:'Avengers',
            publisher:'Marvel',
        },
        {
            id:2,
            name:'Superman',
            alias:'Clark Kent',
            team:'Justice League',
            publisher:'DC',
        },
        {
            id:3,
            name:'Iron Man',
            alias:'Tony Stark',
            team:'Avengers',
            publisher:'Marvel',
        },
    ]

    res.cookie("cookie01", "valor de prueba de la cookie01")

    res.setHeader('Content-Type','application/json');
    return res.status(200).json(heroes);
})

app.post("/leeheader", (req, res)=>{

    console.log(req.headers.authorization)
    console.log(req.body)
    console.log(req.cookies)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"leeheader...!!!"});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect('mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase34')
    console.log('DB online...!!!')
} catch (error) {
    console.log(`Error de conexión a BD: ${error.message}`)
}
