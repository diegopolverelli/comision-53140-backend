import express from 'express';
import { router as sessionsRouter } from './routes/sessionsRouter.js';
import {fakerES_MX as faker} from '@faker-js/faker'
import mongoose from 'mongoose';
import { config } from './config/config.js';
const PORT=config.PORT;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static('./src/public'))

app.use('/api/sessions', sessionsRouter)

app.get('/usuario',(req,res)=>{
    let nombre=faker.person.firstName()
    let apellido=faker.person.lastName()
    let email=faker.internet.email({firstName:nombre, lastName:apellido})
    let password=faker.internet.password({length:6, memorable:true})

    let usuario={nombre, apellido, email, password}

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuario});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

try {
    await mongoose.connect(config.MONGO_URL, {dbName: config.DB_NAME})
    console.log('DB online...!!!')
} catch (error) {
    console.log(`Error de conexión a BD: ${error.message}`)
}
