import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import * as mongoose from "mongoose"

const productsModel=mongoose.model(
  "products",
  new mongoose.Schema(
    {
      code: String, 
      descrip: String,
      price: Number
    },
    {
      timestamps:true
    }
  )
)

@Injectable()
export class ProductsService {
  private readonly products:any[]
  constructor(){
    this.products=[
      {
        id:1, descrip:"Martillo", price:100
      },
      {
        id:2, descrip:"Destornillador", price:200
      },
    ]
  }
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  // async findAll() {
  findAll() {
      // return `This action returns all products`;
    // await productsModel.create({code:"0001", descrip:"Martillo", price:100})
    // return productsModel.find()
    return this.products
  }

  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
