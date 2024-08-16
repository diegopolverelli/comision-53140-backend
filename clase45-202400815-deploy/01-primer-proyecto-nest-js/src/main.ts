import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { MiddPrueba } from './middlewares/LogMiddleware';
import * as mongoose from 'mongoose';

const connDB=async()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "clase45"
        }
        )
        console.log("DB conectada...!!!")
    } catch (error) {
        console.log(`Error al conectar a DB: ${error}`)
    }
}
connDB()

const PORT=process.env.PORT
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(MiddPrueba)

  await app.listen(PORT, ()=>{
    // console.log(`Server corriendo en puerto ${PORT}`)
    Logger.debug(`Server corriendo en puerto ${PORT}`, "NestApplication")
  });
}
bootstrap();

// const nombre = 'Juan Manuel';
// console.log(nombre);
