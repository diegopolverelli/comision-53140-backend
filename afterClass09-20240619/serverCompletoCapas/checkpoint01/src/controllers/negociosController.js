export const getNegocios=async(req, res)=>{

    let negocios="todos los negocios"

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({negocios});

}

export const createNegocio=async(req, res)=>{
    let {nombre, productos}=req.body
    if(!nombre || !productos || !Array.isArray(productos)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre / productos (format array)`})
    }

    // validar existencia de negocio (negocio repetido)
    let nuevoNegocio=`nuevo negocio ${nombre}`
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({nuevoNegocio});
}