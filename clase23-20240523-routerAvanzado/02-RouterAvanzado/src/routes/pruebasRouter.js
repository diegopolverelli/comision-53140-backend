import { Router } from 'express';
export const router=Router()

router.get('/numero/:numero([0-9]+)',(req,res)=>{

    let {numero}=req.params

    res.setHeader('Content-Type','application/json')
    res.status(200).json({
        numero
    })
})

router.get('/nombre/:nombre([A-Za-z]+)',(req,res)=>{

    let {nombre}=req.params

    res.setHeader('Content-Type','application/json')
    res.status(200).json({
        nombre
    })
})

router.get('/numero/:numero([0-9]+)/letra/:letra([a-zA-Z])',(req,res)=>{

    let {numero, letra}=req.params

    res.setHeader('Content-Type','application/json')
    res.status(200).json({
        numero, letra
    })
})

// Route path: /flights/:from-:to
// Request URL: http://localhost:3000/flights/LAX-SFO
// req.params: { "from": "LAX", "to": "SFO" }

router.get("/vuelo/:from-:to", (req, res)=>{

    let {from, to}=req.params

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({from, to})
})

let errores={
    a: "error de seguridad",
    b: "error de hardware", 
    c: "error de software",
}

router.param("codigo", (req, res, next, codigo)=>{
    let detalleError="error indeterminado"
    if(errores[codigo]){
        detalleError=errores[codigo]
    }

    req.detalleError=detalleError

    next()
})


router.get("/error/:codigo", (req, res)=>{

    let {codigo}=req.params
    // let detalleError="error indeterminado"
    // if(errores[codigo]){
    //     detalleError=errores[codigo]
    // }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({mensaje:`Se ha reportado un ${req.detalleError}`})
})

router.get("/error/:codigo/:reportadoPor", (req, res)=>{
    let {reportadoPor}=req.params
    // let {codigo}=req.params
    // let detalleError="error indeterminado"
    // if(errores[codigo]){
    //     detalleError=errores[codigo]
    // }

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({mensaje:`El usuario ${reportadoPor} ha reportado un ${req.detalleError}`})
})

router.get("*", (req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(404).json({error:`not found`})
})