export const getUsers=async(req, res)=>{

    let usuarios="todos los usuarios"

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({usuarios});

}

export const createUser=async(req, res)=>{
    let {nombre, email}=req.body
    if(!nombre || !email){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete nombre / email`})
    }

    // validar existencia de usuario (usuario repetido)
    let nuevoUsuario=`nuevo usuario ${nombre}`
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({nuevoUsuario});
}