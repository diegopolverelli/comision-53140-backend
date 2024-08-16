import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Log - url: ${req.url} - método: ${req.method}`);
        next();
    }
}

export const MiddPrueba=(req, res, next)=>{

    console.log("Prueba...!!!")
    next()
}

// interface IntPersona{
//     name:string
//     email:string
// }

// let persona01:IntPersona

// class Persona implements IntPersona{
//     name
//     email
// }