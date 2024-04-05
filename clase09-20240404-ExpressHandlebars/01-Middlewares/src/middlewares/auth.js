export const auth=(req, res, next)=>{

    let {usuario, password}=req.query
    if(!usuario || !password){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Complete usuario y password`})
    }

    if(usuario!=="admin" || password!=="codercoder"){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Credenciales invalidas`})
    }

    next()
}