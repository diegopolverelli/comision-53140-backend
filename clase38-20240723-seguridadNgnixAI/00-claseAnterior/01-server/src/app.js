import __dirname from './utils.js';
import path from 'path';
import express from 'express';
import {engine} from 'express-handlebars';
import { heroes } from './data/heroes.js';
import {Command} from "commander"

const program = new Command();

program
  .option('-p, --port <PORT>', 'Puerto de escucha del server', 3000);

program.parse();
const options = program.opts();

console.log(options)

const PORT=options.port;

const app=express();

app.engine('handlebars', engine({
runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname,'/views'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(path.join(__dirname,'/public')));

let contador=0
app.get('/',(req,res)=>{
    contador++
    let numero=Math.floor(Math.random()*(20)+0)      // Math.floor(Math.random()*(cantNrosAGenerar)+aPartirDelNro)
    console.log({heroe:heroes[numero].name, contador})

    res.setHeader('Content-Type','text/html');
    res.status(200).render('heroe',{heroe:heroes[numero]});
})

app.get("/prueba", (req, res)=>{
    res.status(400).send("Prueba...!!!")
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
