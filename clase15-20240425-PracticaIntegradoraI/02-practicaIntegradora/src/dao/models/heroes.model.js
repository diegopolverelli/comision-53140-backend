import mongoose from "mongoose"

const heroesColl="heroes"
const heroesSchema=new mongoose.Schema(
    {
        name: {type: String, unique: true, required:true}
    },
    {
        timestamps:true,
        strict: false
    }
)

export const heroesModelo=mongoose.model(
    heroesColl, heroesSchema
)