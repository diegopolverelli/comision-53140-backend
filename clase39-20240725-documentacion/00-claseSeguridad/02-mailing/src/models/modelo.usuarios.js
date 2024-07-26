import mongoose from 'mongoose'

export const usuarioModelo=mongoose.model("usuarios", new mongoose.Schema({
    nombre: String, email: String, password: String, rol: String
}))