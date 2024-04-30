import express from 'express';
import mongoose, { isValidObjectId } from 'mongoose';
import {engine} from "express-handlebars"
import { router as usuariosRouter} from './routes/usuarios.router.js';
import { router as heroesRouter } from './routes/heroes.router.js';
import { router as vistasRouter } from './routes/vistasRouter.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.engine("handlebars", engine({
//     runtimeOptions: {
//         allowProtoPropertiesByDefault: true,
//         allowProtoMethodsByDefault: true,
//     },
// }))
app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")


app.use("/api/heroes", heroesRouter)
app.use('/api/usuarios',usuariosRouter)
app.use("/", vistasRouter)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

// try {
//     // await mongoose.connect("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase14")
//     await mongoose.connect(
//         "mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
//         {
//             dbName:"clase14"
//         }
//     )
//     console.log("DB Online...!!!")

// } catch (error) {
//     console.log("Error al conectar a DB", error.message)
// }

const connDB=async()=>{
    try {
        // await mongoose.connect("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase14")
        await mongoose.connect(
            "mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
            {
                dbName:"clase14"
            }
        )
        console.log("DB Online...!!!")

    } catch (error) {
        console.log("Error al conectar a DB", error.message)
    }
}


connDB()