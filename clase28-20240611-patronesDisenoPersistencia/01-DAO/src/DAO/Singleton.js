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


