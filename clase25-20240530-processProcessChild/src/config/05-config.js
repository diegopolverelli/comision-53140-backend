import dotenv from "dotenv"

const mode="prod"
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