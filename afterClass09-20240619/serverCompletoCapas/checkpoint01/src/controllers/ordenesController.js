export const getOrdenes=async (req, res)=>{
    let ordenes="todas las ordenes"
    res.setHeader('Content-Type','application/json');
    return res.status(200).json({ordenes});
}

// pedido:[{id:1, cantidad:2}, {id:3, cantidad:1}]
export const createOrden=async(req, res)=>{
    let {uid, nid, pedido}=req.body
    if(!uid || !nid || !pedido){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete los datos`})
    }

    if(!Array.isArray(pedido)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`El pedido tiene un formato inválido`})
    }

    // validar existencia usuario
    // validar existencia negocio

    // completar pedido con datos de los productos del negocio

    // generar Total, nrocomp, fecha
    let nuevaOrden="nueva OC de pedido"
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({nuevaOrden});
}