import express from 'express';
import sessions from "express-session"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(sessions({
    secret:"CoderCoder123",
    resave:true, 
    saveUninitialized: true
}))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})


app.get('/login',(req,res)=>{
    req.session.login=true
    req.session.user={name:"Mariana", role:"admin"}

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Login correcto...!!!"});
})

app.get('/current',(req,res)=>{
    console.log(req.session)
    if(req.session.login){
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({usuarioLogueado: req.session.user});
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`No existen usuarios autenticados`})
    }
})


app.get('/logout',(req,res)=>{
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
    return res.status(200).json({payload:"Logout correcto...!!!"});
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
