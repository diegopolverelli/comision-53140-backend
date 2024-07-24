import express from 'express';
import nodemailer from 'nodemailer'
import multer from 'multer'
import fs from 'fs'
import {engine} from 'express-handlebars'
import { usuarioModelo } from './models/modelo.usuarios.js';
import mongoose from 'mongoose';
import { datosModelo } from './models/modelo.datos.js';
import jwt from 'jsonwebtoken'

const PORT=3000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './src/tmp/uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

const transporter=nodemailer.createTransport({
    service:'gmail',
    port: 587,
    auth: {
        user: 'diegopolverelli@gmail.com',
        pass: 'jvncumjsxcxemwcl'
    }
})

const enviar=async(to, subject, message, adjuntos=[])=>{

    let attachments=[]
    adjuntos.forEach(adjunto=>{
        attachments.push({
            path: adjunto.path,
            filename: adjunto.filename
        })
    })

    return transporter.sendMail({
        from: "Diego <diegopolverelli@gmail.com>",
        to,
        subject,
        // text: "",
        html: `
        <p style="color:blue;">${message}</p>
        `,
        attachments
    })
}

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./src/public'))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');


app.post('/mail', upload.array("adjuntos"), async(req,res)=>{
 
    let {to, subject, message}=req.body
    if(!to || !subject || !message){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Faltan datos`})
    }

    let regExMail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
    let toArreglo=to.split(',')
    console.log(toArreglo)
    let error=false
    toArreglo.forEach(direccion=>{
        if(!regExMail.test(direccion.trim())){
            error=true
        }
    })

    // let texto="hola"
    // texto.match()
   

    if(error){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Alguna direccion está mal...!!!`})
    }

    console.log(req.file)
    console.log(req.files)

    let resultado=await enviar(to, subject, message, req.files)

    req.files.forEach(adjunto=>{
        fs.unlinkSync(adjunto.path)
    })

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:resultado});    
})

app.post('/saludo',(req,res)=>{
    let {nombre}=req.body
    
    res.json({nombre})

})

app.get('/saludo',(req,res)=>{
    res.render('saludo')
})

app.post('/saludo2',(req,res)=>{
    let {nombre}=req.body

    nombre=`Hola, ${nombre}...!!!`
    
    res.render("saludo",{nombre})

})

app.post('/usuarios',async(req,res)=>{
    
    console.log(req.body)
    let usuario=await usuarioModelo.find(req.body)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuario});

})

app.get('/usuarios',(req,res)=>{
    res.render('usuarios')
})

app.post('/datos',async(req,res)=>{
    let {dato}=req.body

    let resultado=await datosModelo.create({dato})

    // res.setHeader('Content-Type','application/json');
    // return res.status(200).json({payload:resultado});

    res.redirect('/datos')
})

app.get('/datos',async(req,res)=>{

    let datos=await datosModelo.find().lean()

    console.log(datos)

    res.render('datos', {datos})

})

app.get('/leedatos',async(req,res)=>{

    let datos=await datosModelo.find().lean()

    res.json({datos})

})

app.get('/borraDatos',async(req,res)=>{

    let resultado=await datosModelo.deleteMany({})

    console.log(resultado)

    res.json({resultado})

})

app.get('/token',(req,res)=>{

    let {segundos}=req.query
    if(!segundos){
        segundos=60*60
    }

    let usuario={
        nombre: "Diego", apellido:"Ramirez", 
        password: "123456", rol:"user"
    }

    let token=jwt.sign({usuario}, "secret2023", {expiresIn: segundos})

    res.json({token})
})

let param01="verde"
param01="verde' or '1'='1' and (select * from users)"
let query="select * from products where color='"+param01+"'"
console.log(query)

app.get('/leetoken',(req,res)=>{

    let {token}=req.query

    let datos=""
    if(token){
        try {
            datos=jwt.verify(token, "secret2023")
        } catch (error) {
            return res.json({error:error.message})            
        }
    }

    res.json({datos})
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});


await mongoose.connect('mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&dbName=clase38')
console.log("DB Online...!!!")
// await usuarioModelo.deleteMany({})
// await usuarioModelo.insertMany(
//     [
//         {nombre:"Carla", email:"carla@test.com", rol:"user", password:"123"},
//         {nombre:"Jimana", email:"jimena@test.com", rol:"user", password:"123"},
//         {nombre:"Diego", email:"diegopolverelli@hotmail.com", rol:"user", password:"123"},
//         {nombre:"Manuel", email:"manuel@test.com", rol:"user", password:"123"},
//         {nombre:"Ignacio", email:"ignacio@test.com", rol:"user", password:"123"},
//         {nombre:"Lorena", email:"lorena@test.com", rol:"user", password:"123"},
//         {nombre:"admin", email:"admin@admin.com", rol:"admin", password:"123"},
//         {nombre:"root", email:"root@admin.com", rol:"admin", password:"123"},
//         {nombre:"administrador", email:"administrador@admin.com", rol:"admin", password:"123"},

//     ]
// )