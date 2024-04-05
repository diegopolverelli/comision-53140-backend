export const middleware01=(req, res, next)=>{
    console.log(`Pasó x middleware 01 - url: ${req.url} - método: ${req.method}`)

    next()
}

export const middleware02=(req, res, next)=>{
    console.log(`Pasó x middleware 02`)
    if(req.query.nombre){
        req.query.nombre=req.query.nombre.toUpperCase()
    }

    req.codigo="CoderCoder123"

    next()
}

export const middleware03=(req, res, next)=>{
    console.log(`Pasó x middleware 03`)

    next()
}