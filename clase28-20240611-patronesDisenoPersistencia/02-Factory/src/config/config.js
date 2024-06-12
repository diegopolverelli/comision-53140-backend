import dotenv from "dotenv"
dotenv.config({
    path: "./src/.env", override:true
})

export const config={
    PORT: process.env.PORT || 3001,
    MONGO_URL: process.env.MONGO_URL, 
    DBNAME: process.env.DBNAME, 
    PERSISTENCE: process.env.PERSISTENCE || "FS"
}