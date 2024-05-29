import passport from "passport"
import local from "passport-local"
import passportJWT from "passport-jwt"
import { UsuariosManager } from "../dao/UsuariosManager.js"
import { validaPass } from "../utils.js"

const usuariosManager=new UsuariosManager()

export const iniciaPassport=()=>{

    passport.use(
        "login",
        new local.Strategy(
            {usernameField:"email"},
            async (username, password, done)=>{
                try {
                    let usuario=await usuariosManager.getOneBy({email:username})
                    if(!usuario){
                        return done(null, false, {message:"Credenciales inválidas - (nombre)"})
                    }

                    if(!validaPass(password, usuario.password)){
                        return done(null, false, {message:"Credenciales inválidas - (pass)"})
                    }
        
                    delete usuario.password

                    return done(null, usuario)

                } catch (error) {
                    return done(error)
                }
            }
        )
    ) // fin login


} // fin inicia pass