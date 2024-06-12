import { config } from "../config/config.js";
import { Singleton } from "./Singleton.js";


export let DAO

switch (config.PERSISTENCE.toUpperCase()) {
    case "FS":
        // import dao from "./usuariosFsDAO.js"
        const fsDAO=await import("./usuariosFsDAO.js")
        DAO=fsDAO.usuariosFsDAO
        break;

    case "MONGO":
        Singleton.conectar("mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", "clase14")

        const mongoDAO=await import("./usuariosMongoDAO.js")
        DAO=mongoDAO.usuariosMongoDAO
        break;

    default:
        throw new Error("Persistencia mal configurada... ")
        break;
}