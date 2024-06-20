import express from 'express';

import { router as usuariosRouter} from './routes/usuariosRouter.js';
import { router as negociosRouter } from './routes/negociosRouter.js';
import { router as ordenesRouter } from './routes/ordenesRouter.js';

const PORT=3000;

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/usuarios", usuariosRouter)
app.use("/api/negocios", negociosRouter)
app.use("/api/ordenes", ordenesRouter)

const server=app.listen(PORT,()=>{
    console.log(`Server escuchando en puerto ${PORT}`);
});
