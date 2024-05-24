import passport from "passport"
import passportJWT from "passport-jwt"
import { SECRET } from "../utils.js"

const buscaToken=(req)=>{
    let token=null

    if(req.cookies["codercookie"]){
        token=req.cookies["codercookie"]
    }

    return token
}

// paso 1
export const iniciaPassport=()=>{

    passport.use(
        "jwt",
        new passportJWT.Strategy(
            {
                secretOrKey: SECRET,
                jwtFromRequest: new passportJWT.ExtractJwt.fromExtractors([buscaToken])
            },
            async(contenidoToken, done)=>{  // usuario... token suele tener datos del user
                try {
                    // return done(null, false, {message:"holis...???"})
                    if(contenidoToken.nombre==="Juan"){
                        return done(null, false, {message:"El usuario Juan tiene el acceso temporalmente inhabilitado"})
                    }
                    return done(null, contenidoToken)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )


    // paso 1'   solo si uso SESSIONs...!!! con jwt (para autenticacion), no se configura...!!!

} 