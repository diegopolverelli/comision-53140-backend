import mongoose from "mongoose";
export class Singleton{  // ConnDB
    static #instancia   // conexion
    constructor(url, db){
        mongoose.connect(url,{dbName:db})
    }

    static conectar(url, db){
        if(this.#instancia){
            console.log(`Conexion previamente establecida...`)
            return this.#instancia
        }

        this.#instancia=new Singleton(url, db)
        console.log(`DB conectada`)
        return this.#instancia

    }
}   

Singleton.conectar("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", "clase14")

Singleton.conectar("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", "clase14")
Singleton.conectar("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", "clase14")
Singleton.conectar("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", "clase14")


