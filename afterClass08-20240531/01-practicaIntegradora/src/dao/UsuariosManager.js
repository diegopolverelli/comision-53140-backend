import { usuarioModelo } from "./models/usuariosModel.js";

export class UsuariosManager{
    async getAll(filtro={}){
        return await usuarioModelo.find(filtro).lean()
    }

    async getOneBy(filtro={}){
        return await usuarioModelo.findOne(filtro).lean()
    }

    async create(usuario){
        let nuevoUsuario= await usuarioModelo.create(usuario)
        return nuevoUsuario.toJSON()   // para quitarle el "hidratado"
    }
}