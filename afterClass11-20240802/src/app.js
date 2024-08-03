import express from 'express';
import { sequelize } from './ConnDB.js';
import { router as usuariosRouter } from './routes/usersRouter.js';
const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/usuarios", usuariosRouter)

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.status(200).send('OK');
})

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});

sequelize.sync()
    .then(()=>console.log('Modelos sincronizados...!!!'))
    .catch(error=>console.log("Error:",error.message))

    let resultado=await sequelize.query(`select * from users`)
    console.log(resultado)
