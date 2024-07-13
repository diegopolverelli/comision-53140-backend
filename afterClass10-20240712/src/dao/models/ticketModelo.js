import mongoose from "mongoose";

export const ticketModelo=mongoose.model(
    "ticket",
    new mongoose.Schema(
        {
            nroComp: {type:String, unique:true},
            fecha: Date,
            comprador: String,
            items: Array,
            total: Number
        },
        {
            timestamps:true, strict: false
        }
    )
)