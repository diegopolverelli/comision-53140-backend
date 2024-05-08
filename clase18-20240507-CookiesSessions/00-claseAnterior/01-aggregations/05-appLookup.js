import mongoose from "mongoose";
import { mongourl } from "./utils.js";

// Conexión a la base de datos
await mongoose.connect(mongourl);
console.log('DB online')

// Definición del esquema de la colección "usuarios"
const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number,
    // idCiudad: mongoose.Schema.Types.ObjectId,
    codigoCiudad: Number,
    username: String
});

// Definición del esquema de la colección "ciudades"
const ciudadSchema = new mongoose.Schema({
    codigo: Number,
    nombre: String,
    pais: String
},{collection:'ciudades'});

// Definición del esquema de la colección "logs"
const logSchema = new mongoose.Schema({
    username: String,
    log: String,
    nivel: Number
},{collection:'logs', timestamps:true});

// Modelo de la colección "usuarios"
const Usuario = mongoose.model('Usuario', usuarioSchema);

// Modelo de la colección "ciudades"
const Ciudad = mongoose.model('Ciudad', ciudadSchema);

// Modelo de la colección "logs"
const Log = mongoose.model('Log', logSchema);

await Usuario.deleteMany()
await Usuario.insertMany([
    {
        nombre:'Diego', apellido:'Lopez', edad:33,
        codigoCiudad:2,
        username:'diego001'
    },
    {
        nombre:'Maria Rosa', apellido:'Gutierrez', edad:29,
        codigoCiudad:1,
        username: 'mrosa001'
    },
    {
        nombre:'Maximiliano', apellido:'Estevez', edad:31,
        codigoCiudad:2,
        username: 'maxigol001'
    },
])

let usuarios=await Usuario.find()
console.log((usuarios))

await Ciudad.deleteMany()
await Ciudad.insertMany([
    {
        codigo:1, nombre: 'Moron', pais: 'Argentina'
    },
    {
        codigo:2, nombre: 'Banfield', pais: 'Argentina'
    }
])

let ciudades=await Ciudad.find()
console.log(ciudades)

await Log.deleteMany()
await Log.insertMany([
    {
        username: 'maxigol001', log:'todo OK', nivel:1
    },
    {
        username: 'maxigol001', log:'datos subidos al server', nivel:1
    },
    {
        username: 'maxigol001', log:'antivirus actualizado', nivel:1
    },
    {
        username: 'maxigol001', log:'error de autenticacion', nivel:3
    },
    {
        username: 'diego001', log:'deploy realizado satisfactoriamente', nivel:1
    },
    {
        username: 'diego001', log:'error de autenticacion', nivel:3
    },
    {
        username: 'mrosa001', log:'error de autenticacion', nivel:3
    },
    {
        username: 'mrosa001', log:'fallo lectura en disco', nivel:4
    },
])



// Ejemplo de agregación con $lookup
let resultado=await Usuario.aggregate([
    {
        $lookup: {
            from: "ciudades",
            localField: "codigoCiudad",
            foreignField: "codigo",
            as: "ciudad"
        }
    },
    {
        $lookup: {
            from: "logs",
            localField: "username",
            foreignField: "username",
            as: "logs"
        }
    }, 
    {
        $unwind: "$logs"
    },
    {
        $group:{
            _id:'$nombre',
            promedioNivel:{$avg: '$logs.nivel'},
            ciudad: {$max: '$ciudad.nombre'}
        }
    }
]);



console.log(JSON.stringify(resultado, null, 5))


process.exit()
