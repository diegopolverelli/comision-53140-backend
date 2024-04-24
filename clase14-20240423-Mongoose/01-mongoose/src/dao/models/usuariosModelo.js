import mongoose from "mongoose"

const usuariosCollection="usuarios"
const usuariosEsquema=new mongoose.Schema(
    {
        nombre: {type:String, required: true},
        apellido: String, 
        email: {
            type: String,
            unique: true, 
            required: true
        },
        password: String
    },
    {
        timestamps: true, 
        // collection: "alumnos"
    }
)

export const usuarioModelo=mongoose.model(
    usuariosCollection,
    usuariosEsquema
)

