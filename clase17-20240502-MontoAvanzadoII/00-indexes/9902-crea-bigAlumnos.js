// ************************************************************
// ************************************************************
// ************************************************************
// MODIFICAR STRING DE CONEXIÓN...!!! APUNTARLO A LA INSTANCIA
// DE MONGODB ATLAS PARTICULAR (está en utils.js)
// ************************************************************
// ************************************************************
// ************************************************************

import mongoose from 'mongoose';
import { mongourl } from './utils.js';

let alumnoModelo=mongoose.model('alumnos', new mongoose.Schema({
  codigo: Number,
  nombre: String, 
  apellido: String,
  email: String,
  estudios: String,
  origen: String,
  promedio: Number
},{collection:'bigAlumnos'}))

let alumnos = []

let nombres = ['Lautaro', 'Martina', 'Jimena', 'Morena', 'Marcos', 'Luca', 'Diego', 'Isabella', 'Juana', 'Carolina', 'Fernando', 'Federico', 'Gonzalo', 'Víctor', 'Catalina', 'Juan Carlos', 'Rodrigo', 'Luis']
let apellidos = ['Gonzalez', 'Marinoff', 'Fernandez', 'Souto', 'Blanco', 'Gimenez', 'Roncaglia', 'Benitez', 'Rivas', 'Petrelli', 'Napoli', 'Rubinstein', 'Bermudez', 'Tapia', 'Negri']
let estudios = ['literatura', 'medicina', 'desarrollo web', 'desarrollo backend', 'idiomas', 'rrhh', 'administración de empresas', 'profesorado', 'ingeniería civil', 'abogacia', 'física', 'tecnicatura en ciencias de la comunicación', 'finanzas', 'economía', 'ciencias politicas']
let pais_de_origen = ['Argentina', 'España', 'Mexico', 'Uruguay', 'Perú', 'Chile', 'Colombia', 'Costa Rica']
let server = ['@gmail.com', '@yahoo.es', '@hotmail.com', '@yahoo.com.ar', '@gmx.com', '@outlook.com']
let promedio = [6.5, 7, 7.5, 8, 8.5, 9, 9.5, 6.25, 7.25, 8.25, 9.25]

for (let i = 1; i <= 250000; i++) {
  let a1 = Math.round(Math.random() * (nombres.length - 1));
  let a2 = Math.round(Math.random() * (apellidos.length - 1));
  let a3 = Math.round(Math.random() * (estudios.length - 1));
  let a4 = Math.round(Math.random() * (pais_de_origen.length - 1));
  let a5 = Math.round(Math.random() * (server.length - 1));
  let a6 = Math.round(Math.random() * (promedio.length - 1));

  // let nombre = nombres[a1] + ' ' + apellidos[a2]
  alumnos.push(
    {
      codigo: i + 9000000,
      nombre: nombres[a1],
      apellido: apellidos[a2],
      email: (nombres[a1] + apellidos[a2] + server[a5]).toLowerCase(),
      estudios: estudios[a3].toLocaleUpperCase(),
      origen: pais_de_origen[a4],
      promedio: promedio[a6]
    }
  )
}

const conectar = async () => {
  try {
    await mongoose.connect(mongourl)
    console.log(`Conexión a DB establecida`)

    await alumnoModelo.deleteMany()
    let alumnosCreados=await alumnoModelo.insertMany(alumnos)
    console.log(alumnosCreados)

    await alumnoModelo.updateOne({codigo:9250000},{nombre:'Domingo'})

    process.exit()

  } catch (err) {
    console.log(`Error al conectarse con el servidor de BD: ${err.message}`)
  }
}

conectar();