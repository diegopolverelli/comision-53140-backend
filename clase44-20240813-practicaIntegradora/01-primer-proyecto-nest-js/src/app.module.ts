import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({envFilePath:"./src/.env", ignoreEnvVars:true}),
    MongooseModule.forRoot(process.env.MONGO_URL, {dbName:process.env.DB_NAME}),
    UsersModule, 
    ProductsModule, 
    CartsModule, 
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(){
    Logger.debug(process.env.DB_NAME, "AppModule")
  }
}
