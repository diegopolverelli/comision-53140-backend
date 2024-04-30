import mongoose from "mongoose"

export const mensajesModelo=mongoose.model(
    "mensajes",
    new mongoose.Schema(
        {
            email:String, 
            mensaje: String
        },
        {
            timestamps:true
        }
    )
)