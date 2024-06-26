import mongoose from 'mongoose'

export const modeloDatos = mongoose.model('datos', new mongoose.Schema({
    nroComp: String,
    fecha: String,
    cliente: {
        nombre: String,
        apellido: String,
        dni: String,
        email: String
    },
    carrito: [
        {
            producto: String, 
            precio: Number, 
            cantidad: Number, 
            id: String
        }
    ],
    total: Number
}, {
    timestamps: {
        updatedAt: "fecha modificacion", createdAt: "fecha alta"
    }
}))