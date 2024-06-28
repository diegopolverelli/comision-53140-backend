import { TIPOS_ERROR } from "../utils/EErrors.js";

export const errorHandler=(error, req, res, next)=>{

    // grabarlo a fs...
    console.log(`${error.cause?error.cause:error.message}`)

    switch (error.code) {
        case TIPOS_ERROR.AUTENTICACION || TIPOS_ERROR.AUTORIZACION:
            res.setHeader('Content-Type','application/json');
            return res.status(401).json({error:`Credenciales incorrectas`})

        case TIPOS_ERROR.ARGUMENTOS_INVALIDOS:
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`${error.message}`})
    
        default:
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({error:`Error - contacte al administrador`})
    }

    // return next()
}