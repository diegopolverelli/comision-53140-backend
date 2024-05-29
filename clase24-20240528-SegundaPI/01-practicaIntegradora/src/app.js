import express from 'express';
import mongoose from "mongoose"
import passport from 'passport';

import { iniciaPassport } from './config/passport.config.js';
import { HeroesRouter } from './routes/HeroesRouter.js';
import { router as routerModelo } from './routes/routerModelo.js';
const PORT=3000;

const app=express();
const heroesRouter=new HeroesRouter()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
iniciaPassport()
app.use(passport.initialize())

app.use("/api/pruebas", routerModelo)
app.use("/api/heroes", heroesRouter.getRouter() )

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


try {
    await mongoose.connect("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName:"clase24"
        }
    )
    console.log("DB conectada...!!!")
} catch (error) {
    console.log(error.message)
}