import express from 'express';
const PORT=process.env.PORT||3005;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK...!!!');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}...!!!`);
});
