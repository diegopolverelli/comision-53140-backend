import express from 'express';
import cookieParser from "cookie-parser"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('./src/public'))
app.use(cookieParser())

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

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
