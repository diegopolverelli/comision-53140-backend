export class UsuariosMemoryDAO{
    constructor(){
        this.usuarios=[
            {
                id:1,
                nombre:'Diego', 
                email:'diego@test.com', 
                rol: 'usuario'
            },
            {
                id:2,
                nombre:'Laura', 
                email:'laura@test.com', 
                rol: 'usuario'
            },
            {
                id:3,
                nombre:'Admin',
                email:'admin@test.com', 
                rol: 'admin'
            },
        ]
    }

    getAll(){
        // return await usuariosModelo.find().lean()
        return this.usuarios
    }

    create(usuario){
        let id=1
        if(this.usuarios.length>0){
            id=Math.max(...this.usuarios.map(d=>d.id))+1
        }

        let nuevoUsuario={id, ...usuario}
        this.usuarios.push(nuevoUsuario)
        return nuevoUsuario
        
        // let nuevoUsuario=await usuariosModelo.create(usuario)
        // return nuevoUsuario.toJSON()
    }
}