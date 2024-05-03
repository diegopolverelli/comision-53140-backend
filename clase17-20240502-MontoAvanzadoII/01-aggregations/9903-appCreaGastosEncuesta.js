// ************************************************************
// ************************************************************
// ************************************************************
// MODIFICAR STRING DE CONEXIÓN...!!! APUNTARLO A LA INSTANCIA
// DE MONGODB ATLAS PARTICULAR (url en utils.js)
// ************************************************************
// ************************************************************
// ************************************************************

import mongoose from "mongoose";
import { mongourl } from "./utils.js";

// ********************** Gastos Empleados **************************
const empleadosGastos=[
    {
        nombre: 'Pedro', apellido:'Barrios', ciudad:'Ciudadela', zona:'Oeste',
        gastos:[
            {
                periodo:'202203',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:12000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:6000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:10000
                    },

                ]
            },
            {
                periodo:'202202',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:20000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:1000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:9000
                    },

                ]
            },
            {
                periodo:'202201',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:5000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:1000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:3000
                    },

                ]
            },

        ]
    },
    {
        nombre: 'Juan Manuel', apellido:'Ortega', ciudad:'Banfield', zona:'Sur',
        gastos:[
            {
                periodo:'202203',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:13000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:12000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:3000
                    },

                ]
            },
            {
                periodo:'202202',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:5000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:10000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:5000
                    },

                ]
            },
            {
                periodo:'202201',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:5000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:1000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:3000
                    },

                ]
            },

        ]
    },
    {
        nombre: 'Jimena', apellido:'Gaitan', ciudad:'Moreno', zona:'Oeste',
        gastos:[
            {
                periodo:'202203',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:30000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:12000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:8000
                    },

                ]
            },
            {
                periodo:'202202',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:15000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:5000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:10000
                    },

                ]
            },
            {
                periodo:'202201',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:5000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:1000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:14000
                    },

                ]
            },

        ]
    },
    {
        nombre: 'Ramon', apellido:'Benitez', ciudad:'Rafael Castillo', zona:'Oeste',
        gastos:[
            {
                periodo:'202203',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:3000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:12000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:3000
                    },

                ]
            },
            {
                periodo:'202202',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:15000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:10000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:5000
                    },

                ]
            },
            {
                periodo:'202201',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:5000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:1000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:3000
                    },

                ]
            },

        ]
    },
    {
        nombre: 'Micaela', apellido:'Quintana', ciudad:'Ciudadela', zona:'Oeste',
        gastos:[
            {
                periodo:'202203',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:8000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:11000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:9000
                    },

                ]
            },
            {
                periodo:'202202',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:10000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:10000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:10000
                    },

                ]
            },
            {
                periodo:'202201',
                conceptos:[
                    {
                        codigo:100,
                        descrip:'viaticos',
                        importe:7000
                    },
                    {
                        codigo:101,
                        descrip:'promocion',
                        importe:10000
                    },
                    {
                        codigo:200,
                        descrip:'varios',
                        importe:14000
                    },

                ]
            },

        ]
    },

]

const gastosColeccion='gastos';
const gastosEsquema=new mongoose.Schema({
    nombre:String, 
    apellido: String,
    ciudad: String, 
    zona: String,
    gastos:[
        {
            periodo:String,
            conceptos:[
                {
                    codigo:Number,
                    descrip:String,
                    importe:Number
                }
            ]
        }
    ]
});

const gastosModelo=mongoose.model(gastosColeccion, gastosEsquema);



// ********************** Encuesta **************************
let encuesta=[
    {
        candidato:'CANDIDATO A',
        partidoo:'ROJO',
        presupuesto:3000000,
        datos:[
            {
                rangoEtario:'jovenes',
                votos:100
            },
            {
                rangoEtario:'mayores',
                votos:150
            },
        ]
    },
    {
        candidato:'CANDIDATO B',
        partidoo:'VERDE',
        presupuesto:1500000,
        datos:[
            {
                rangoEtario:'jovenes',
                votos:200
            },
            {
                rangoEtario:'mayores',
                votos:30
            },
        ]
    },
    {
        candidato:'CANDIDATO C',
        partidoo:'AZUL',
        presupuesto:700000,
        datos:[
            {
                rangoEtario:'jovenes',
                votos:20
            },
            {
                rangoEtario:'mayores',
                votos:200
            },
        ]
    }

]

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


// ********************** Entorno async p/conectar a DB **************************
const env = async () => {
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida...!!!`)

        await gastosModelo.deleteMany({});
        await gastosModelo.insertMany(empleadosGastos);
        console.log("Coleccion gastos creada...!!!")

        await encuestaModelo.deleteMany({});
        await encuestaModelo.insertMany(encuesta);
        console.log("Coleccion encuesta creada...!!!")

        process.exit()


    } catch (err) {
        console.log(`Error de conexión a la base de datos :( ${err.message}`)
    }
}


env();