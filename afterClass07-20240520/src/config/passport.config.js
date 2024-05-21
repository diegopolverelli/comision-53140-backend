import passport from "passport";
import local from "passport-local"
import github from "passport-github2"
import { UsuariosManagerMongo as UsuariosManager} from "../dao/UsuariosManagerMONGO.js";
import { CartManager } from "../dao/CartManager.js";
import { generaHash, validaPassword } from "../utils.js";

const usuariosManager=new UsuariosManager()
const cartManager=new CartManager()

// paso 1
export const initPassport=()=>{

    passport.use(
        "github",
        new github.Strategy(
            {
                clientID:"de la app de Github",
                clientSecret:"de la app de Github",
                callbackURL:"http://localhost:3000/api/sessions/callbackGithub",
            },
            async(ta, tr, profile, done)=>{
                try {
                    // console.log(profile)
                    let email=profile._json.email
                    let nombre=profile._json.nombre
                    if(!email){
                        return done(null, false)
                    }
                    let usuario=await usuariosManager.getByPopulate({email})
                    if(!usuario){
                        let nuevoCarrito=await cartManager.create()
                        usuario=await usuariosManager.create(
                            {
                                nombre, email, profile, carrito: nuevoCarrito._id
                            }
                        )
                        usuario=await usuariosManager.getByPopulate({email})
                    }
                    return done(null, usuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

    passport.use(
        "registro",
        new local.Strategy(
            {
                passReqToCallback: true, 
                usernameField: "email"
            },
            async(req, username, password, done)=>{
                try {
                    let {nombre} = req.body
                    if(!nombre){
                        return done(null, false)
                    }

                    let existe=await usuariosManager.getBy({email:username})
                    if(existe){
                        return done(null, false)
                    }

                    // resto de validaciones que correspondan... formato email... nombre de ciertos caracteres... pasword, etc...

                    let nuevoCarrito=await cartManager.create()
                    password=generaHash(password)

                    let usuario=await usuariosManager.create({nombre, email:username, password, carrito: nuevoCarrito._id})

                    return done(null, usuario)


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
                    if(username=="adminCoder@coder.com" && password=="adminCod3r123"){
                        
                        let usuario={
                            _id: "idAdmin", nombre: "admin", email: username, 
                            carrito: {_id:"663980cad0e550982f0db3f1"}, rol: "admin"
                        }
                        return done(null, usuario)
                    }

                    let usuario=await usuariosManager.getByPopulate({email:username})
                    if(!usuario){
                        return done(null, false)
                    }

                    if(!validaPassword(password, usuario.password)){
                        return done(null, false)
                    }

                    // usuario={...usuario}
                    delete usuario.password // y resto de datos sensibles
                    return done(null, usuario)
                } catch (error) {
                    return done(error)
                }
            }
        )
    )

// paso 1' (solo si hay sessions configuradas)
    passport.serializeUser((usuario, done)=>{
        return done(null, usuario._id)
    })

    passport.deserializeUser(async(id, done)=>{
        let usuario
        if(id==="idAdmin"){
            usuario={
                _id: "idAdmin", nombre: "admin", email: "adminCoder@coder.com", 
                carrito: {_id:"663980cad0e550982f0db3f1"}, rol: "admin"
            }
        }else{
            usuario=await usuariosManager.getBy({_id:id})
        }
        return done(null, usuario)
    })

}