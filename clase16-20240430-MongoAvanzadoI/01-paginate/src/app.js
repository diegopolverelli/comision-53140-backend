import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import mongoose from "mongoose"
import { engine } from 'express-handlebars';
import { router as vistasRouter } from './routes/vistasRouter.js';

const PORT = 3000;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, './public')));

app.use("/", vistasRouter)

const server = app.listen(PORT, () => {
    console.log(`Server escuchando en puerto ${PORT}`);
});

const connDB=async()=>{
    try {
        await mongoose.connect('mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase16')
        console.log(`Conexión a DB establecida`)

    } catch (error) {
        console.log(error.message)        
    }
}

connDB()



