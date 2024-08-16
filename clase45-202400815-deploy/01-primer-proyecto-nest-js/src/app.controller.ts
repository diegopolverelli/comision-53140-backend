import { BadRequestException, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("saludo")
  getHello(@Query("nombre") nombre:string, @Query("edad", new ParseIntPipe({optional:true})) edad:number): number|string {
    // return this.appService.getHello();

    console.log(edad, "5")

    let saludo=nombre?`Hola ${nombre}`:`Hola...!!!`
    return saludo
  }

  @Post("heroes")
  prueba1(){

    return "prueba de post"
  }

  @Get("carts/:id/:id2")
  async carts(@Param("id") numero:number, @Param("id2", ParseIntPipe) numero2:number){
    numero=Number(numero)
    if(isNaN(numero)){
      // throw new HttpException("El id tiene que ser numérico", HttpStatus.BAD_REQUEST)
      throw new BadRequestException("El id tiene que ser numérico")
    }

    // const f1=async()=>{
    //   return 100
    // }

    // numero= f1()


    return `Devuelve cart ${numero}`
  }


} // fin Controller



