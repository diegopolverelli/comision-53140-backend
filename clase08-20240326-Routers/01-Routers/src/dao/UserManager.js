// const fs=require("fs")
import fs from "fs"
// const crypto=require("crypto")
// const path=require("path")
import path from "path"

export default class UserManager{
    constructor(rutaArchivo){
        this.path=rutaArchivo
        // this.usuarios=[]
    }

    async leerUsuarios(){
        if(fs.existsSync(this.path)){
            return JSON.parse(await fs.promises.readFile(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
    }

    async leerById(id){
        let usuarios=await this.leerUsuarios()
        let usuario=usuarios.find(u=>u.id===id)
        return usuario
    }

    async addUsuario(usuario){
        let usuarios=await this.leerUsuarios()

        let id=1
        if(usuarios.length>0){
            id=Math.max(...usuarios.map(d=>d.id))+1
        }

        usuario={
            id, 
            ...usuario
        }
 
        // orm.create(usuario)
        usuarios.push(usuario)

        await fs.promises.writeFile(this.path, JSON.stringify(usuarios, null, 5))

        return usuario
        
    }

    async update(id, usuario){
        // actualizan

        return {message:`Se modifico el usuario con id ${id}`}
    }

    async delete(id){
        // borrar del archivo

        return {message:`Se elimino el usuario con id ${id}`}
    }

} // fin class

// module.exports=UserManager


// console.log(userManager.leerUsuarios())  // falta resulver promesa
// userManager.leerUsuarios().then(datos=>console.log(datos))  // OK...!!!

// const entorno=async()=>{
//     console.log("DIRNAME:",__dirname)
//     console.log("RUTA ABSOLUTA A MANO:",__dirname+"/data/usuarios.json")
//     console.log("RUTA CON path.join:",path.join(__dirname, "data", "usuarios.json"))
//     // let userManager=new UserManager("./data/usuarios.json") // ruta relativa
//     // let userManager=new UserManager(__dirname+"/data/usuarios.json") // ruta absoluta "casera o a mano"
//     let userManager=new UserManager(path.join(__dirname, "data", "usuarios.json")) // ruta absoluta CORRECTA...!!!
//     try {
//         console.log(await userManager.leerUsuarios())
        
//     } catch (error) {
//         console.log(error.message)
//         return         
//     }
// }

// entorno()
