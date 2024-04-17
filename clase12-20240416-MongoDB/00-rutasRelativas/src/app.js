import express from 'express';
import {engine} from "express-handlebars"
import { ProductManager } from './dao/products/ProductManager.js';
import { router as productsRouter } from './routes/productsRouter.js';
const PORT=3000;

const app=express();
const productManager=new ProductManager("./src/data/products.json")
console.log(productManager.getAll())

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use("/api/products", productsRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
