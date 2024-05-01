import { usuariosModelo } from "./models/usuariosModelo.js"

export class UsuariosMongoManager{

    async getAll(){
        return await usuariosModelo.find().lean()
    }

    async getAllPaginate(page=1){
        return await usuariosModelo.paginate({}, {limit:15, page, lean:true})
    }


}