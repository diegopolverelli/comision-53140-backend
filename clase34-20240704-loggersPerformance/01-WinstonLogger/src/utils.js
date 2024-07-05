import {fileURLToPath} from 'url';
import { dirname } from 'path';
import winston from "winston"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default __dirname;

const transporteArchivoError=new winston.transports.File(
    {
        level: "warn",
        filename: "./src/errorLogs.log",
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
        )
    }
)

const filtroDebug=winston.format(data=>{
    // console.log(data)
    if(data.level==="debug"){
        data.message=data.message.toUpperCase()
        return data
    }
})

const transporteArchivoDebug=new winston.transports.File(
    {
        level: "debug",
        filename: "./src/debugLogs.log",
        format: winston.format.combine(
            filtroDebug(),
            winston.format.timestamp(),
            winston.format.json()
        )
    }
)

export const logger=winston.createLogger(
    {
        transports: [
            new winston.transports.Console(
                {
                    level: "http",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                        winston.format.colorize(),
                        winston.format.simple()
                        // winston.format.json()
                    )
                }
            ),
            transporteArchivoError, 

        ]
    }
)

let debug=true  // args x consola, o de variables de entorno
if(debug==true){
    logger.add(transporteArchivoDebug)
}

let customLevels={
    grave: 0,
    medio: 1, 
    leve: 2
}

const transpPersonalizadoConsola=new winston.transports.Console(
    {
        level:"leve",
        format: winston.format.combine(
            winston.format.colorize(
                {
                    colors: {grave: "bold white redBG", medio: "blue", leve: "green"}
                }
            ),
            winston.format.simple(),
        )
    }
)

const loggerPersonalizado=winston.createLogger(
    {
        levels: customLevels,
        transports:[
            new winston.transports.File(
                {
                    level:"grave",
                    filename:"./src/erroresGraves.log",
                    format: winston.format.combine(
                        winston.format.timestamp(),
                    )
                }
            )
        ]
    }
)

if(debug==true){
    loggerPersonalizado.add(transpPersonalizadoConsola)
}


export const middLogger=(req, res, next)=>{
    req.logger=logger
    req.logger2=loggerPersonalizado

    next()
}