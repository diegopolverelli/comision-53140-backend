import jwt from "jsonwebtoken"
import { SECRET } from "../utils.js";
export const auth=(permisos=[])=>{   // auth(["ADmIN", "premium"])  o  auth(["public"])
    return (req, res, next)=>{
        permisos=permisos.map(p=>p.toLowerCase())

        if(permisos.includes("public")){
            return next()
        }

        if(!req.user?.rol){
            res.setHeader('Content-Type','application/json');
            return res.status(401).json({error:`No hay usuarios autenticados, o problema con el rol`})
        }

        if(!permisos.includes(req.user.rol.toLowerCase())){
            res.setHeader('Content-Type','application/json');
            return res.status(403).json({error:`Privilegios insuficientes para acceder al recurso`})
        }

        return next()
    }
}