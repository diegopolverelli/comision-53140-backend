import mongoose from "mongoose";
export const usuariosModelo=mongoose.model(
    "usuarios",
    new mongoose.Schema(
        {
            nombre: String, 
            email: {type: String, unique:true},
            rol: {type: String, default:"user"},
            ordenes: {
                type: [
                    {
                        orden:{
                            type: mongoose.Types.ObjectId, ref:"ordenes"
                        }
                    }
                ]
            }
        },
        {
            timestamps:true
        }
    )
)