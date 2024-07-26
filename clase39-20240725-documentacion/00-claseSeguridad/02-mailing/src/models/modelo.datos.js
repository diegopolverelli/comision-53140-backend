import mongoose from 'mongoose'

export const datosModelo=mongoose.model("datos", new mongoose.Schema({
    dato: String
}))