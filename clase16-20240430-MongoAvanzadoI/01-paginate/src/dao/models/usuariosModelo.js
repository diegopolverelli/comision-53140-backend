import mongoose from 'mongoose';
import paginate from "mongoose-paginate-v2"

const usuariosEsquema = new mongoose.Schema({
    first_name: String, last_name: String,
    email: String, gender: String, code: Number
}, { collection: 'bigUsers' })

usuariosEsquema.plugin(paginate)

export const usuariosModelo = mongoose.model('usuarios', usuariosEsquema)