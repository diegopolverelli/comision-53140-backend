import passport from "passport"
import local from "passport-local"
import { UsuariosManagerMongo } from "../dao/UsuariosManagerMONGO.js"
import { generaHash, validaPasword } from "../utils.js"

const usuariosManager=new UsuariosManagerMongo()

// paso 1
export const initPassport=()=>{

    passport.use(
        "registro",
        new local.Strategy(
            {
                usernameField:"email", 
                passReqToCallback: true
            },
            async(req, username, password, done)=>{
                try {
                    let {nombre}=req.body
                    if(!nombre){
                        // res.setHeader('Content-Type','application/json');
                        // return res.status(400).json({error:`Complete nombre, email, y password`})
                        return done(null, false)
                    }
                
                    let existe=await usuariosManager.getBy({email: username})
                    if(existe){
                        // res.setHeader('Content-Type','application/json');
                        // return res.status(400).json({error:`Ya existe ${email}`})
                        return done(null, false)
                    }
                
                    // otras validaciones
                
                    password=generaHash(password)
                
                    let nuevoUsuario=await usuariosManager.create({nombre, email:username, password, rol:"user"})
                    // res.setHeader('Content-Type','application/json')
                    // res.status(200).json({
                    //     message:"Registro correcto...!!!", nuevoUsuario
                    // })
                    return done(null, nuevoUsuario)
                    
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use(
        "login",
        new local.Strategy(
            {
                usernameField:"email"
            },
            async(username, password, done)=>{
                try {
                    let usuario=await usuariosManager.getBy({email:username})
                    if(!usuario){
                        // res.setHeader('Content-Type','application/json');
                        // return res.status(400).json({error:`Credenciales inválidas`})
                        return done(null, false)    
                    }
                
                    if(!validaPasword(password, usuario.password)){
                        // res.setHeader('Content-Type','application/json');
                        // return res.status(400).json({error:`Credenciales inválidas`})
                        return done(null, false)    
                    }
                          
                    return done(null, usuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    // paso 1' (1 bis) - solo si usamos SESSIONS, configuro serializar / deserializer...
    passport.serializeUser((usuario, done)=>{
        return done(null, usuario._id)
    })

    passport.deserializeUser(async(id, done)=>{
        let usuario=await usuariosManager.getBy({_id:id})
        return done(null, usuario)
    })

}
