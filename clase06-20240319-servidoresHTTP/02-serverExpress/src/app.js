const express=require("express")

const PORT=3000

const app=express()

app.get("/", (req,res)=>{

    res.send("Server básico con Express...!!!")
})


app.get("/contacto", (req,res)=>{

    res.send("Contact Page")
})

app.listen(PORT, ()=>console.log(`Server online en puerto ${PORT}`))