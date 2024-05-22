import jwt from "jsonwebtoken"
import { SECRET } from "../utils.js";
export const auth=(req, res, next)=>{

    console.log(req.headers)
    // if(!req.session.usuario) ... // cuando había sessions instalado
    if(!req.headers.authorization){
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`Usuario no autenticado`})
    }

    let token=req.headers.authorization.split(" ")[1]    //  Bearer adfadsf.dsf8asdf..asdfd
    console.log({token})
    try {
        let usuario=jwt.verify(token, SECRET)
        req.user=usuario
    } catch (error) {
        res.setHeader('Content-Type','application/json');
        return res.status(401).json({error:`${error}`})
    }


    next()
}