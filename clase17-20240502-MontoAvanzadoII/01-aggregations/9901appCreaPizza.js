// ************************************************************
// ************************************************************
// ************************************************************
// MODIFICAR STRING DE CONEXIÓN...!!! APUNTARLO A LA INSTANCIA
// DE MONGODB ATLAS PARTICULAR (url en utils.js)
// ************************************************************
// ************************************************************
// ************************************************************

import mongoose from 'mongoose';
import { mongourl } from './utils.js';


const ventas=[
    {
        name:"Pepperoni", size:"small", price:19,
        quantity:10, date:"2023-01-02"
    },
    {
        name:"Pepperoni", size:"medium", price:20,
        quantity:20, date:"2023-01-02"
    },
    {
        name:"Pepperoni", size:"large", price:21,
        quantity:30, date:"2023-01-17"
    },
    {
        name:"Cheese", size:"small", price:12,
        quantity:15, date:"2023-01-02"
    },
    {
        name:"Cheese", size:"medium", price:13,
        quantity:50, date:"2023-01-02"
    },
    {
        name:"Cheese", size:"large", price:14,
        quantity:10, date:"2023-01-02"
    },
    {
        name:"Vegan", size:"small", price:17,
        quantity:10, date:"2023-01-02"
    },
    {
        name:"Vegan", size:"medium", price:18,
        quantity:10, date:"2023-01-02"
    },
];



const ventasCol='ventas'

const ventasEsquema=new mongoose.Schema({
    name:String,
    size:{
        type: String,
        enum:["small","medium","large"],
        default:"medium"
    },
    price:Number, 
    quantity:Number,
    date:Date, 
})

const ventasModelo=mongoose.model(ventasCol,ventasEsquema);

const env=async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`);

        await ventasModelo.deleteMany({});
        await ventasModelo.insertMany(ventas)
        console.log("Coleccion ventas creada...!!!")
        process.exit()

    } catch (error) {
        console.log(`Error en la app: ${error.message}`);
    }
}

env()