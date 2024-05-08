import express from 'express';
import mongoose from 'mongoose';
import { mongourl } from './utils.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

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
    } catch (error) {
        console.log(`Error en la app: ${error.message}`);
    }
}

env()

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/datos',async(req,res)=>{

    let datos=await ventasModelo.find()

    res.setHeader('Content-Type','application/json');
    return res.status(200).json(datos);

})

app.get('/informe',async(req,res)=>{

    let informe=await ventasModelo.aggregate(
        [
            // {
            //     $match:{size:"medium"}
            // },
            {
                $group:{
                    _id: "$name",
                    ventas: {$sum: "$quantity"},
                    precioMaximo: {$max: "$price"},
                    precioPromedio: {$avg: "$price"}
                }
            },
            {
                $sort:{ventas:-1}
            },
            {
                $project:{
                    _id:0,
                    sabor:"$_id",
                    ventas:1, 
                    precioMaximo:1
                }
            },
            {
                $group:{
                    _id: "cualquierCosa",
                    detalle:{
                        $push:{
                            sabor:"$sabor",
                            ventas:"$ventas"
                        }
                    },
                    detalle2:{
                        $push:"$$ROOT"
                    }
                }
            },
            {
                $project:{
                    _id:0,
                    detalle:1,
                    periodo:"202404",
                    autorInforme:"alumnos comis. 53140"
                }
            },
            {
                $merge:{
                    into: "informeVentas"
                }
            }
        ]
    )

    res.setHeader('Content-Type','application/json');
    return res.status(200).json(informe);

})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
