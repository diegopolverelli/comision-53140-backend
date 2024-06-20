import { usuariosModelo } from "./model/usuariosModelo.js";

export class UsuariosDAO{
    async get(){
        return await usuariosModelo.find().populate("ordenes.orden").lean()
    }

    async getOneBy(filtro={}){
        return await usuariosModelo.findOne(filtro).lean()
    }

    async create(usuario){
        let nuevoUsuario=await usuariosModelo.create(usuario)
        return nuevoUsuario.toJSON()
    }

    async update(id, usuario){
        return await usuariosModelo.updateOne({_id: id}, usuario)
    }
}