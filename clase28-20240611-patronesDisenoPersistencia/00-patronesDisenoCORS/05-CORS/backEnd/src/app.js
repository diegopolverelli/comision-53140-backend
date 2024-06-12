import express from 'express';
import cors from "cors"
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.get('/', (req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/datos',(req,res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Datos desde el server...!!!"});
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
