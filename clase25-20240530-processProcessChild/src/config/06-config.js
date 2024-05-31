import dotenv from "dotenv"
import {Command, Option} from "commander"

let programa=new Command()

programa.addOption(new Option("-m, --mode <modo>", "Mode de ejecución del script").choices(["dev", "prod"]).default("dev"))

programa.parse()
const argumentos=programa.opts()

// const mode="prod"
const mode=argumentos.mode
dotenv.config(
    {
        path: mode==="prod"?"./src/.env.production":"./src/.env.development",
        override: true
    }
)

export const config={
    PORT: process.env.PORT||3001,
    MONGO_URL: process.env.MONGO_URL, 
    DB_NAME: process.env.DB_NAME
}