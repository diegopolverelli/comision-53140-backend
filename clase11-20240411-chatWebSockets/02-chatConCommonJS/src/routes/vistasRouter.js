// import { Router } from 'express';
const Router=require("express").Router
// export const router=Router()
const router=Router()

const nombre=require("../app").nombre

router.get('/',(req,res)=>{


    res.status(200).render('home')
})

router.get('/chatws',(req,res)=>{


    res.status(200).render('chat')
})

module.exports={router}




