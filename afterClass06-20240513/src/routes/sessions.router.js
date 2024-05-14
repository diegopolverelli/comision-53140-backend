import { Router } from 'express';
import { UsuariosManagerMongo as UsuariosManager } from '../dao/UsuariosManagerMONGO.js';
import { generaHash } from '../utils.js';
import { CartManager } from '../dao/CartManager.js';
export const router=Router()

const usuariosManager=new UsuariosManager()
const cartManager=new CartManager()

router.post('/registro',async(req,res)=>{

    let {nombre, email, password, web}=req.body
    if(!nombre || !email || !password){
        if(web){
            return res.redirect(`/registro?error=Complete nombre, email, y password`)
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Complete nombre, email, y password`})
        }
    }

    let existe=await usuariosManager.getBy({email})
    if(existe){
        if(web){
            return res.redirect(`/registro?error=Ya existe ${email}`)
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Ya existe ${email}`})
        }
    }

    // otras validaciones

    password=generaHash(password)

    try {
        let carritoNuevo=await cartManager.create()
        let nuevoUsuario=await usuariosManager.create({nombre, email, password, rol:"user", carrito:carritoNuevo._id})
        if(web){
            return res.redirect(`/login?mensaje=Registro correcto para ${nombre}`)
        }else{
            res.setHeader('Content-Type','application/json')
            res.status(200).json({
                message:"Registro correcto...!!!", nuevoUsuario
            })
        }
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type','application/json');
        return res.status(500).json(
            {
                error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle:`${error.message}`
            }
        )
    }

})

router.post("/login", async(req, res)=>{
    let {email, password, web}=req.body

    console.log(req.body)
    if(!email || !password){
        if(web){
            return res.redirect(`/login?error=Complete email, y password`)
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Complete email, y password`})
        }
    }

    // otras validaciones
    // preguntar por adminCoder@coder.com, y la contraseña adminCod3r123
    // si son esos datos, devolves al usuario nombre "admin", email 
    // adminCoder@coder.com y rol "admin"


    // let usuario=await usuariosManager.getBy({email, password:generaHash(password)})
    let usuario=await usuariosManager.getByPopulate({email, password:generaHash(password)})
    if(!usuario){
        if(web){
            return res.redirect(`/login?error=Credenciales invalidas`)
        }else{
            res.setHeader('Content-Type','application/json');
            return res.status(400).json({error:`Credenciales inválidas`})
        }
    }

    usuario={...usuario}
    delete usuario.password
    req.session.usuario=usuario

    if(web){
        res.redirect("/perfil")
    }else{
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"Login correcto", usuario});
    }

})

router.get("/logout", (req, res)=>{
    req.session.destroy(e=>{
        if(e){
            console.log(error);
            res.setHeader('Content-Type','application/json');
            return res.status(500).json(
                {
                    error:`Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                    detalle:`${error.message}`
                }
            )
            
        }
    })

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Logout Exitoso...!!!"});
})