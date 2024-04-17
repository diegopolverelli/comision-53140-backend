import fs from "fs"

export class ProductManager{
    constructor(ruta){
        this.path=ruta
    }

    getAll(){
        if(fs.existsSync(this.path)){
            return JSON.parse(fs.readFileSync(this.path, {encoding:"utf-8"}))
        }else{
            return []
        }
        // devuelve productos
    }
}