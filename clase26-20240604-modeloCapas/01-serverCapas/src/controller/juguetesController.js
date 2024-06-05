export const getJuguetes=(req,res)=>{

    let juguetes="todos los juguetes"
    

    res.setHeader('Content-Type','application/json')
    res.status(200).json({juguetes})
}

export const createJuguete=(req,res)=>{

    let nuevoJuguete="nuevo juguetes"

    res.setHeader('Content-Type','application/json')
    res.status(200).json({nuevoJuguete})
}