import express from 'express';
import sessions from "express-session"
import { auth } from './middleware/auth.js';
import { router as heroesRouter } from './routes/heroesRouter.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(sessions({
    secret: "CoderCoder123",
    resave: true, saveUninitialized: true
}))

app.get("/logout", (req, res)=>{
    req.session.destroy(error=>{
        if(error){
            console.log(error);
            res.setHeader('Content-Type','application/json');
            return res.status(500).json(
                {
                    error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                    detalle:`${error.message}`
                }
            )
        }
    })

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Logout exitoso"});

})

app.use("/api/heroes", auth, heroesRouter)

app.get('/datos', auth, (req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        datos:"DATOS...!!!", session: req.session
    });
});


app.get('/login',(req,res)=>{
    
    let {usuario, password}=req.query
    if(!usuario || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete los datos...!!!`})
    }

    if(usuario!="juan" || password!="CoderCoder123"){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Credenciales incorrectas`})
    }

    req.session.usuario=usuario

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        message:"Login correcto", usuario   
    });
});


app.get('/',(req,res)=>{

    if(req.session.contador){
        req.session.contador++
    }else{
        req.session.contador=1
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send(`Visitas al site: ${req.session.contador}`);
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
