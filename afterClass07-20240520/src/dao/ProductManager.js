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


    // delete
}   

// const productManager=new ProductManager()
