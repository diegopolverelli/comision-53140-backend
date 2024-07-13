import express from 'express';
import {engine} from "express-handlebars"
import mongoose from 'mongoose';
import sessions from "express-session"
import { initPassport } from './config/passport.config.js';
import passport from 'passport';

import { router as sessionsRouter } from './routes/sessions.router.js';
import { router as productsRouter } from './routes/productRouter.js';
import { router as cartsRouter } from './routes/cartRouter.js';
import { router as vistasRouter } from './routes/vistasRouter.js';
import { errorHandler } from './middleware/errorHandler.js';
const PORT=3000;

process.on("uncaughtException", error=>{
    console.log("Error no contemplado:", error.message)
})

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(sessions({
    secret: "CoderCoder123", resave:true, 
    saveUninitialized: true, 
    // store:
}))

// paso 2
initPassport()
app.use(passport.initialize())
app.use(passport.session()) // solo cuando hay sessions configurados
app.use(express.static("./src/public"))
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/api/sessions", sessionsRouter)
app.use("/api/carts", cartsRouter)
app.use("/api/products", productsRouter)
app.use("/", vistasRouter)

const prueba1=async()=>{
    console.log(asdfasdfasdf)
    return true
}

app.get("/prueba1", async(req, res, next)=>{
    try {
        prueba1()

        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"prueba1"});
    } catch (error) {
        next(error)
    }


})

app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

const connDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=afterClass05")
        console.log("DB conectada...!!!")   
    } catch (error) {
        console.log(error.message)
    }
}

connDB()
