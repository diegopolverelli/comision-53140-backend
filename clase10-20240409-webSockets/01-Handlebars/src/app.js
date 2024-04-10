import express from 'express';
import { engine } from "express-handlebars"
import { router as heroesRouter } from './routes/heroesRouter.js';
import { router as vistasRouter } from './routes/vistas.router.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.engine("handlebars", engine())
app.set("view engine", "handlebars")
app.set("views", "./src/views")

app.use('/api/heroes', heroesRouter)
app.use("/", vistasRouter)



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
