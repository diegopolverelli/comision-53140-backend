import mongoose from 'mongoose';
import { mongourl } from './utils.js';

let alumnoEsquema=new mongoose.Schema({
    codigo: Number,
    nombre: String, 
    apellido: String,
    email: String,
    estudios: String,
    origen: String,
    promedio: Number
  }, {collection:'bigAlumnos'})

alumnoEsquema.index({nombre:-1})
alumnoEsquema.index({nombre:-1, apellido:1})
alumnoEsquema.index({email:-1})
alumnoEsquema.index({email:"text"})



let alumnoModelo=mongoose.model('alumnos', alumnoEsquema)


const entorno=async()=>{
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`)

        // let resultado=await alumnoModelo.find({nombre:"Martina", apellido:"Souto"}).explain("executionStats")
        // console.log(JSON.stringify(resultado.executionStats, null, 5))

        // let resultado=await alumnoModelo.find({email:/hotmail/}).explain("executionStats")
        // console.log(JSON.stringify(resultado.executionStats, null, 5))

        let resultado=await alumnoModelo.find({$text:{$search:"hotmail"}}).explain("executionStats")
        console.log(JSON.stringify(resultado.executionStats, null, 5))


        process.exit()

    } catch (error) {
        console.log(error.message)
    }

}

entorno()