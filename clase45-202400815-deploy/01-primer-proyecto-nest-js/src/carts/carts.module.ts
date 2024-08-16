import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports:[ProductsModule],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
