import { usuarioModelo } from "./models/usuariosModelo.js"

export class UsuariosManagerMONGO{
    // constructor(){
    //     this.usuarios=[
    //         {id:1, nombre:'Juan', email:'jlopez@gmail.com'}
    //     ]
    // }

    async getUsuarios(){
        // return this.usuarios
        return await usuarioModelo.find()
    }

    async getUsuarioByEmail(email){
        return await usuarioModelo.findOne({email})
    }

    async getUsuarioBy(filtro){   // filtro= {email:"diego@test.com", edad:40}
        return await usuarioModelo.findOne(filtro)
    }

    async addUsuario(usuario){
        // let id=1
        // if(this.usuarios.length>0){
        //     id=Math.max(...this.usuarios.map(d=>d.id))+1
        // }
        
        // usuario={
        //     id, ...usuario
        // }

        // this.usuarios.push(usuario)
        // return usuario

        return await usuarioModelo.create(usuario)
    }

    async updateUser(id, usuario){
        // return await usuarioModelo.updateOne({_id:id}, usuario)
        return await usuarioModelo.findByIdAndUpdate(id, usuario, {runValidators:true, returnDocument:"after"} )
    }

    async deleteUser(id){
        return await usuarioModelo.deleteOne({_id:id})
    }

} // fin class