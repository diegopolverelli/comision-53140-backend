import { carritoModelo } from "./models/carritosModelo.js";

export class CartManager{
    async getAll(){
        return carritoModelo.find().lean()
    }

    async getOneBy(filtro={}){
        return await carritoModelo.findOne(filtro).lean()
    }

    async getOneByPopulate(filtro={}){
        return await carritoModelo.findOne(filtro).populate("productos.producto").lean()
    }

    async create(){
        let carrito=await carritoModelo.create({productos:[]})
        return carrito.toJSON()
    }

    async update(id, carrito){
        return await carritoModelo.updateOne({_id:id}, carrito)
    }
}