// server.js

const express = require('express');
const app = express();

// Configuración y lógica del servidor
app.get('/',(req,res)=>{

    console.log("Se está ejecutando el get '/'...")
    
    res.setHeader('Content-Type','application/json');
    res.status(200).json({
        status:"ok"    
    });
});

app.get('/error',(req,res)=>{

  console.log("Se está ejecutando el get '/error'...")
  
  res.setHeader('Content-Type','application/json');
  res.status(400).json({
      status:"error"    
  });
});

const server = app.listen(3000, () => {
  console.log('Servidor en línea en el puerto 3000');
});

module.exports = server;
