import mongoose from "mongoose";
// 

export const productosModelo=mongoose.model(
    "productos",    // "producto"   "product"   "pet"   "car"
    new mongoose.Schema(
        {
            descripcion: String, 
            codigo: {type: String, unique: true, required: true},
            precio: Number, 
            stock: {
                type: Number, default: 0
            }
        },
        {
            timestamps: true, //collection: "productos2021"
        }
    )
)