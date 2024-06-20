import { negociosModelo } from "./model/negociosModelo.js";

export class NegociosDAO{
    async get(){
        return await negociosModelo.find().lean()
    }

    async getOneBy(filtro={}){
        return await negociosModelo.findOne(filtro).lean()
    }

    async create(negocio){
        let nuevoNegocio=await negociosModelo.create(negocio)
        return nuevoNegocio.toJSON()
    }

}