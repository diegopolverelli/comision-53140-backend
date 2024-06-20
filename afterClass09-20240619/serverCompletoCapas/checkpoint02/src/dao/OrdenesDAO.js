import { ordenesModelo } from "./model/ordenesModelo.js"

export class OrdenesDAO{
    async get(){
        return await ordenesModelo.find().populate("usuario").populate("negocio").lean()
    }

    async create(orden){
        let nuevaOrden=await ordenesModelo.create(orden)
        return nuevaOrden.toJSON()
    }
}