// node --env-file ./src/.env .\src\04-dotenv.js
// console.log(process.env.PORT)
// console.log(process.env.MONGO_URL)
// console.log(process.env.PRUEBA_PORT)
import express from 'express';
import mongoose from "mongoose"
import { config } from './config/04-config.js';

// const PORT=3000
// const PORT=process.env.PORT;
const PORT=config.PORT

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect(config.MONGO_URL, {dbName: config.DB_NAME})
    console.log(`Conectado a la base de datos ${config.DB_NAME}`)
} catch (error) {
    console.log("Error al conectar DB")
}
