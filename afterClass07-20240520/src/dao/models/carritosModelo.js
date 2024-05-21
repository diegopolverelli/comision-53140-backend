import mongoose from "mongoose";

export const carritoModelo=mongoose.model(
    "carritos",
    new mongoose.Schema(
        {
            productos:{
                type:[
                    {
                        producto:{
                            type: mongoose.Types.ObjectId, ref:"productos"
                        }, 
                        cantidad: Number
                    }
                ]
            }
        }
    )
)