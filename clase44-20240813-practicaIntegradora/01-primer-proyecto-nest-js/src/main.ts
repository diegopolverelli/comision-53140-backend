import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const PORT=process.env.PORT
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, ()=>{
    // console.log(`Server corriendo en puerto ${PORT}`)
    Logger.debug(`Server corriendo en puerto ${PORT}`, "NestApplication")
  });
}
bootstrap();

// const nombre = 'Juan Manuel';
// console.log(nombre);
