import { Router } from 'express';
import { ProductManager } from '../dao/ProductManager.js';
import { CartManager } from '../dao/CartManager.js';
import { auth } from '../middleware/auth.js';
export const router=Router()

const productManager=new ProductManager()
const cartsManager=new CartManager()

router.get("/carrito/:cid", async(req, res)=>{
    let {cid}=req.params

    let carrito=await cartsManager.getOneByPopulate({_id:cid})

    res.setHeader('Content-Type','text/html');
    return res.status(200).render("carrito", {carrito});
})

router.get('/productos', auth, async(req,res)=>{
    // let carrito_id="asldfkjasdlfkj"
    // let carrito=await cartsManager.getOneBy()
    // if(!carrito){
    //     carrito=await cartsManager.create()
    // }
    let carrito={
        _id: req.session.usuario.carrito._id
    }

    let productos
    try {
        productos=await productManager.getAll()        
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

    res.setHeader('Content-Type','text/html')
    res.status(200).render("productos", {
        productos,
        carrito
    })
})

router.get('/',(req,res)=>{

    res.status(200).render('home', {login: req.session.usuario})
})

router.get('/registro',(req, res, next)=>{
    if(req.session.usuario){
        return res.redirect("/perfil")
    }

    next()
},(req,res)=>{
    let {error}=req.query

    res.status(200).render('registro', {error, login: req.session.usuario})
})

router.get('/login',(req, res, next)=>{
    if(req.session.usuario){
        return res.redirect("/perfil")
    }

    next()
}, (req,res)=>{

    let {error, mensaje}=req.query

    res.status(200).render('login', {error, mensaje, login: req.session.usuario})
})

router.get('/perfil', auth, (req,res)=>{

    res.status(200).render('perfil',{
        usuario:req.session.usuario, login: req.session.usuario
    })
})
