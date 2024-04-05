import express from 'express';
import { router as heroesRouter } from './routes/heroesRouter.js';
import { middleware01, middleware02, middleware03 } from './middlewares/generales.js';
import { auth } from './middlewares/auth.js';
import { errorHandler } from './middlewares/errorHandler.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(
    middleware01, 
    middleware02,
    (req, res, next)=>{
        console.log(`Middleware a nivel app "on line"`)
        next()
    }
)

app.use('/api/heroes', heroesRouter)

app.get('/', middleware03, (req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/datos', middleware03, (req,res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({
        payload:"datos", 
        nombre:req.query.nombre,
        codigo:req.codigo
    });
})

app.get('/datos2', middleware03, auth, (req,res)=>{

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({
        payload:"datos2", 
        nombre:req.query.nombre,
        codigo:req.codigo
    });
})

app.get('/datos3', middleware03, (req,res)=>{

    console.log(lalala)

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('datos3');
})

app.use(errorHandler)



const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
