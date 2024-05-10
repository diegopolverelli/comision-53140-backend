import express from 'express';
import cookieParser from "cookie-parser"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./src/public'))
app.use(cookieParser("CoderCoder123"))

app.get('/',(req,res)=>{


    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/setcookies',(req,res)=>{

    let datos={nombre: "Juan", rol:"user"}

    res.cookie("cookie1", "valor cookie 1", {})
    res.cookie("cookie2", datos, {})
    res.cookie("cookie3conVto", datos, {maxAge: 1000*5})
    res.cookie("cookie4conVto", datos, {expires: new Date(2024, 4, 25)})
    res.cookie("cookie5conVtoFirmada", datos, {signed:true , expires: new Date(2024, 4, 25)})

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('Cookies seteadas...!!!');
})

app.get('/getcookies',(req,res)=>{
    
    let cookies=req.cookies
    let cookiesFirmadas=req.signedCookies

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        cookies,
        cookiesFirmadas
    });
});

app.get('/delcookies',(req,res)=>{
    
    // res.clearCookie("cookie2")
    Object.keys(req.cookies).forEach(c=>res.clearCookie(c))
    Object.keys(req.signedCookies).forEach(c=>res.clearCookie(c))

    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        msg:"Cookies eliminadas"
    });
});


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
