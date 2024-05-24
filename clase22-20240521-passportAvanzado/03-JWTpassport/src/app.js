import express from 'express';
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import fs from 'fs'
import { SECRET } from './utils.js';
// import { auth } from './middleware/auth.js';
import { router as heroesRouter } from './routes/heroes.router.js';
import { iniciaPassport } from './config/passport.config.js';
import passport from 'passport';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
iniciaPassport()
app.use(passport.initialize())
// app.use(passport.session()) // no va...!!! solo cuando trabajo con sessions...!!!
app.use(express.static("./src/public"))

app.use("/api/heroes", heroesRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

let usuarios=[]
if(fs.existsSync('./src/usuarios.json')){
    usuarios=JSON.parse(fs.readFileSync('./src/usuarios.json','utf-8'))
}

app.post('/registro',(req,res)=>{
    let {nombre, email, password}=req.body
    if(!nombre || !email || !password) return res.status(400).send('Ingrese todos los datos')

    let usuario=usuarios.find(u=>u.email===email)
    if(usuario) return res.status(400).send(`El usuario ${email} ya existe en la DB`)

    let id=1
    if(usuarios.length>0) id=usuarios[usuarios.length-1].id+1

    usuario={
        id, nombre, email, password
    }

    usuarios.push(usuario)

    fs.writeFileSync('./src/usuarios.json',JSON.stringify(usuarios,null,5))

    res.json({
        usuarioCreado:usuario
    })
})

app.post('/login',(req,res)=>{
    let {email, password}=req.body
    if(!email || !password) return res.status(400).send('Ingrese email y password')

    usuarios=JSON.parse(fs.readFileSync('./src/usuarios.json','utf8'))

    let usuario=usuarios.find(u=>u.email===email && u.password===password)
    if(!usuario) return res.status(400).send(`Error credenciales`)

    usuario={...usuario}
    delete usuario.password

    let token=jwt.sign(usuario, SECRET, {expiresIn: "1h"})
    // let token=jwt.sign(usuario, SECRET, {expiresIn: 10})

    res.cookie("codercookie", token, {httpOnly: true})

    return res.status(200).json({
        usuarioLogueado:usuario,
        token
    })

})

// app.get('/usuario', auth, (req,res)=>{
app.get('/usuario', passport.authenticate("jwt", {session:false}), (req,res)=>{


    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        mensaje:'Perfil usuario',
        usuario: req.user
    });
});

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
