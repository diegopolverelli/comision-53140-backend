import mongoose from "mongoose";
export const negociosModelo=mongoose.model(
    "negocios",
    new mongoose.Schema(
        {
            nombre: String, 
            productos: {
                type: [
                    {
                        id: Number, 
                        descrip: String, 
                        precio: Number
                    }
                ]
            }
        },
        {
            timestamps:true
        }
    )
)