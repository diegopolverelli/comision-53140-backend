import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ProductsService } from '../products/products.service';

@Injectable()
export class CartsService {
  private readonly carts:any[]
  constructor(private readonly productsService: ProductsService){
    this.carts=[
      {
        id:1, 
        products:[]
      },
    ]
  }
  create(createCartDto: CreateCartDto) {
    return 'This action adds a new cart';
  }

  findAll() {
    // return `This action returns all carts`;
    
    return {
      carts:this.carts,
      products:this.productsService.findAll()
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
