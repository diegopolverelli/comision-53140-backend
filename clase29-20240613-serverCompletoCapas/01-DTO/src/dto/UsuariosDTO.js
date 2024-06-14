export class UsuariosDTO{
    constructor(usuario){
        this.firstName=usuario.nombre.toUpperCase()
        this.lastName=usuario.apellido?usuario.apellido.toUpperCase():null
        this.fullName=usuario.apellido?`${this.firstName} ${this.lastName}`:this.firstName
        this.email=usuario.email
        this.rol="user"
        // this.
    }
}

// return {
//     firstName:
// }

// let usuarioFormatoOK=new UsuariosDTO({})