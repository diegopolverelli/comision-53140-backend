import express from 'express';
import {MercadoPagoConfig, Preference} from "mercadopago"
const PORT=3000;

const client=new MercadoPagoConfig({
    accessToken:"contraseña produccion privada, usuario de pruebas vendedor"
})

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("./src/public"))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})


app.post('/pagar',async(req,res)=>{
    let {importe}=req.body
    if(!importe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete importe`})
    }

    const preference=new Preference(client)

    let resultado=await preference.create(
        {
            body:{
                items:
                [
                    {
                        id: "codigo 001",
                        title: "producto comprado",
                        quantity: 1, 
                        unit_price: importe
                    }
                ],
                back_urls:{
                    "success":"http://localhost:3000/feedback",
                    pending:"http://localhost:3000/feedback",
                    failure:"http://localhost:3000/feedback", 
                },
                // auto_return: "approved"
            }
        }
    )

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:resultado});
})

app.get("/feedback", (req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:req.query});
})


const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
