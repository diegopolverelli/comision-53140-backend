import express from 'express';
import mongoose from "mongoose";
import { mongourl } from './utils.js';

const app=express();

const server=app.listen(3000,()=>{
    console.log('Server escuchando el puerdo 3000...!!!')
});


const encuestaColeccion='encuesta'
const encuestaEsquema=new mongoose.Schema({
    candidato:String,
    partido:String,
    presupuesto: Number,
    datos:[
        {
            rangoEtario:String,
            votos:Number
        },
    ]
},{collection:'encuesta'})

const encuestaModelo=mongoose.model(encuestaColeccion, encuestaEsquema);

app.get('/',async(req,res)=>{
    let resultado=await encuestaModelo.find();

    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})

// 1) porcentual de cada candidato, sobre el total de votos encuestados
app.get('/1',async(req,res)=>{
    let resultado=await encuestaModelo.aggregate([
        {
            $unwind:'$datos'
        },
        // {
        //     $group:{
        //         _id:'Informacion',
        //         totalVotos:{$sum:'$datos.votos'},
        //         detalle:{
        //             $push:'$$ROOT'
        //         }
        //     }
        // },
        // {
        //     $unwind:'$detalle'
        // },
        // {
        //     $group:{
        //         _id:'$detalle.candidato',
        //         totalVotos:{$max:'$totalVotos'},
        //         votos:{$sum:'$detalle.datos.votos'}
        //     }
        // },
        // {
        //     $project:{
        //         candidato:'$_id',
        //         totalVotos:'$totalVotos',
        //         votos:'$votos',
        //         porcentual:{$multiply:[{$divide:['$votos','$totalVotos']},100]}
        //     }
        // },
        // {
        //     $sort:{candidato:1}
        // },
        // {
        //     $group:{
        //         _id:'informe',
        //         detalle:{
        //             $push:'$$ROOT'
        //         }
        //     }
        // },
        // {
        //     $project:{
        //         _id:0,
        //         titulo:'Votos porcentuales por candidato:',
        //         fecha: new Date().toUTCString(),
        //         responsableInforme: 'Alumnos Programación Backend comision 55565',
        //         informe:'$detalle'
        //     }
        // }

    ])

    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})


// 2) Presupuesto total de los tres candidatos, y porcentual de cada uno:
app.get('/2',async(req,res)=>{
    let resultado=await encuestaModelo.aggregate(
        [
            {
                $group:{
                    _id:'grupo',
                    presupuestoTotal:{$sum:'$presupuesto'},
                    detalle:{
                        $push:{
                            candidato:'$candidato',
                            presupuesto:'$presupuesto'
                        }
                    }
                }
            },
            // {
            //     $unwind:'$detalle'
            // },
            // {
            //     $group:{
            //         _id:'$detalle.candidato',
            //         presupuestoTotal:{$min:'$presupuestoTotal'},
            //         presupuestoCandidato:{$min:'$detalle.presupuesto'},
            //     }
            // },
            // {
            //     $project:{
            //         presupuestoTotal:'$presupuestoTotal',
            //         presupuestoCandidato:'$presupuestoCandidato',
            //         porcentual:{$multiply:[{$divide:['$presupuestoCandidato','$presupuestoTotal']},100]}
            //     }
            // },
            // {
            //     $sort:{porcentual:-1}
            // },
            // {
            //     $group:{
            //         _id:'grupo único',
            //         informe:{
            //             $push:{
            //                 candidato:'$_id',
            //                 presupuestoTotal:'$presupuestoTotal',
            //                 presupuestoCandidato:'$presupuestoCandidato',
            //                 porcentual:'$porcentual'
            //             }
            //         }
            //     }
            // },
            // {
            //     $project:{
            //         _id:0,
            //         titulo:'Informe porcentual por presupuesto',
            //         fecha:new Date().toUTCString(),
            //         responsable:'alumnos afterClass04',
            //         informe:'$informe'
            //     }
            // }
        ]
    );

    res.setHeader('Content-Type','application/json');
    res.json({resultado})

})




const env = async () => {
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida...!!!`)


    } catch (err) {
        console.log(`Error de conexión a la base de datos :( ${err}`)
    }
}


env();