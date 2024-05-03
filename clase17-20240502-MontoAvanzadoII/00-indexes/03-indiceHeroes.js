import mongoose from 'mongoose';
import { mongourl } from './utils.js';

const heroesEsquema = new mongoose.Schema({
    id: {
        type: Number
    },
    name: String,
    alias: String, 
    powers: {
        type: [String]
    }, 
    team: String,
    publisher: String,
    enemies:{
        type: [
            {
                name: String,
                powers: {
                    type: [
                        String
                    ]
                }
            }
        ]
    }

}, { collection: 'heroes' })




export const heroesModelo = mongoose.model('heroes', heroesEsquema)

const conectar = async () => {
    try {
        await mongoose.connect(mongourl)
        console.log(`Conexión a DB establecida`)




        process.exit()

    } catch (err) {
        console.log(`Error al conectarse con el servidor de BD: ${err.message}`)
    }
}

conectar();


