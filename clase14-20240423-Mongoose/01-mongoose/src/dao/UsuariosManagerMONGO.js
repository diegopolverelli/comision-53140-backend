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

    addUsuario(usuario){
        let id=1
        if(this.usuarios.length>0){
            id=Math.max(...this.usuarios.map(d=>d.id))+1
        }
        
        usuario={
            id, ...usuario
        }

        this.usuarios.push(usuario)
        return usuario

    }
}