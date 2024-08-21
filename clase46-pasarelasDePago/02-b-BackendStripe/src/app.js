import express from 'express';
import Stripe from "stripe"
import cors from "cors"
const PORT=8080;

const stripe = Stripe('clave privada Stripe');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.post("/api/payments/payment-intents", async(req, res)=>{

    let {id}=req.query
    if(!id){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete id`})
    }

    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`id debe ser numérico`})
    }

    const mockCart = [
        { id: 1, name: "papas", price: 1000 },
        { id: 2, name: "queso", price: 500 },
        { id: 3, name: "hamburguesa", price: 1500 },
        { id: 4, name: "soda", price: 1000 },
        { id: 5, name: "golosinas", price: 800 }
    ]

    let producto=mockCart.find(p=>p.id===id)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: producto.price,
        currency: "usd",
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods: {
          enabled: true,
        },
      });
    
      res.status(200).json({
        payload:{
            client_secret: paymentIntent.client_secret,
        }
      });



})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
