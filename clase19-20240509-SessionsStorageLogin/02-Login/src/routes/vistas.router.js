import { Router } from 'express';
import { auth } from '../middleware/auth.js';
export const router=Router()

router.get('/',(req,res)=>{

    res.status(200).render('home')
})

router.get('/registro',(req,res)=>{

    res.status(200).render('registro')
})

router.get('/login',(req,res)=>{

    let {error}=req.query

    res.status(200).render('login', {error})
})

router.get('/perfil', auth, (req,res)=>{

    res.status(200).render('perfil',{
        usuario:req.session.usuario
    })
})
