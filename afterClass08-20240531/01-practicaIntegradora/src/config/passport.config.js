import passport from "passport"
import local from "passport-local"
import passportJWT from "passport-jwt"
import { UsuariosManager } from "../dao/UsuariosManager.js"
import { SECRET, validaPass } from "../utils.js"

const usuariosManager=new UsuariosManager()

const buscaToken=(req)=>{
    let token=null

    if(req.headers.authorization){
        let auxiliar=req.headers.authorization.split(" ")
        console.log(auxiliar)
        token=auxiliar[1]
    }

    // if(req.cookies.coderCookie){
    //     token=req.cookies.coderCookie
    // }

    return token
}

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

    passport.use("current", new passportJWT.Strategy(
        {
            secretOrKey: SECRET,
            jwtFromRequest: new passportJWT.ExtractJwt.fromExtractors([buscaToken])
        },
        async(usuario, done)=>{   // contenidoToken=usuario
            console.log("paso x estrategia current...!!!")
            try {
                return done(null, usuario)
            } catch (error) {
                return done(error)
            }
        }
    ))

} // fin inicia pass