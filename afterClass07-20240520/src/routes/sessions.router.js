import { Router } from 'express';
import { UsuariosManagerMongo as UsuariosManager } from '../dao/UsuariosManagerMONGO.js';
import { generaHash } from '../utils.js';
import { CartManager } from '../dao/CartManager.js';
import passport from 'passport';
export const router=Router()

const usuariosManager=new UsuariosManager()
const cartManager=new CartManager()

router.get("/error", (req, res)=>{
    res.setHeader('Content-Type','application/json');
    return res.status(500).json({error:`Error en la operación`})
})

// paso 3
router.post("/registro", passport.authenticate("registro", {failureRedirect:"/api/sessions/error"}), (req, res)=>{

    // si passport ejecuta OK (si realiza el return done(null, usuario)), 
    // genera en la req un objeto use (req.user), con los datos del usuario que enviamos vía done
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({payload:"Registro exitoso...!!!", usuario: req.user});
})

router.post("/login", passport.authenticate("login", {failureRedirect:"/api/sessions/error"}), (req, res)=>{

    req.session.usuario=req.user
    console.log(req.user)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Login exitoso...!!!", usuario:req.user});
})

router.get("/github", passport.authenticate("github", {}), (req, res)=>{})

router.get("/callbackGithub", passport.authenticate("github", {failureRedirect:"/api/sessions/error"}), (req, res)=>{

    console.log("QUERY PARAMS:",req.query)
    req.session.usuario=req.user
    console.log(req.user)

    res.setHeader('Content-Type','application/json');
    return res.status(200).json({payload:"Login exitoso...!!!", usuario:req.user});
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