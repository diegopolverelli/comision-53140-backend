import express from 'express';
import { router as heroesRouter } from './routes/heroesRouter.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/heroes', heroesRouter)


app.get('/',(req,res)=>{

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

app.get('/error01',(req,res)=>{

    console.log(lalala)

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('error01');
})

app.get('/error02',async(req,res,next)=>{

    try {
        console.log(lalala)
        
    } catch (error) {
        // res.setHeader('Content-Type','application/json');
        // return res.status(400).json({error:`${error.message}`})
        return next(error)
    }

    res.setHeader('Content-Type','text/plain');
    res.status(200).send('error02');
})

app.use(errorHandler)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
