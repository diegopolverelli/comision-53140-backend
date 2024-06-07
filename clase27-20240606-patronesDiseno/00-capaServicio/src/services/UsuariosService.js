import { UsuariosMemoryDAO as UsuariosDAO } from "../DAO/UsuariosMemoryDAO.js"
// import { UsuariosMongoDAO as UsuariosDAO  } from "../DAO/UsuariosMongoDAO.js"

class UsuariosService{
    constructor(dao){
        this.dao=dao
    }

    getUsers=async()=>{
        return await this.dao.getAll()
    }

    getUserByEmail=async(email)=>{
        let usuarios=await this.dao.getAll()
        let usuario=usuarios.find(u=>u.email===email)
        return usuario
    }

    getUserByNombre=async(nombre)=>{
        let usuarios=await this.dao.getAll()
        let usuario=usuarios.find(u=>u.nombre===nombre)
        return usuario
    }

    createUser=async(usuario)=>{
        return await this.dao.create(usuario)
    }
}

export const usuariosService=new UsuariosService(new UsuariosDAO())