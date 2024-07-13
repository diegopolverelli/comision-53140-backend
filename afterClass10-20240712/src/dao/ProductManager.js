import { productosModelo } from "./models/productosModelo.js";

export class ProductManager{

    async getAll(){
        return await productosModelo.find().lean()
    }

    async getOneBy(filtro={}){
        return await productosModelo.findOne(filtro).lean()
    }

    // create
    async create(producto){
        let nuevoProducto=await productosModelo.create(producto)
        return nuevoProducto.toJSON()
    }

    // update
    async update(id, producto){
        return await productosModelo.updateOne({_id: id}, producto)
    }


    // delete
}   

// const productManager=new ProductManager()
