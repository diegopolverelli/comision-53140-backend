import { Router } from 'express';

export class CustomRouter{
    constructor(){
        this.router=Router()
        this.init()
    }

    init(){}

    getRouter(){
        return this.router
    }

    get(ruta, ...funciones){  // los ... son aquó el operador rest
        this.router.get(ruta, (req, res, next)=>{
            console.log("validacion interna del custom router")

            res.setHeader('Content-Type','application/json');
            res.success=(mensaje)=>res.status(200).json({
                status:"OK", mensaje
            })
            res.badRequest=(error)=>res.status(400).json({
                status:"bad request", error
            })
            next()
        }, ...funciones) // los ... son aquó el operador spread
    }

    post(ruta, ...funciones){  // los ... son aquó el operador rest
        this.router.post(ruta, ...funciones) // los ... son aquó el operador spread
    }

} // fin CustomRouter