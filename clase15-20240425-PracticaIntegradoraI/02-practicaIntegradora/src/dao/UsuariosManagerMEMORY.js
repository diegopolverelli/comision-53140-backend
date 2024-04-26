export class UsuariosManagerMEMORY{
    constructor(){
        this.usuarios=[
            {id:1, nombre:'Juan', email:'jlopez@gmail.com'}
        ]
    }

    getUsuarios(){
        return this.usuarios
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