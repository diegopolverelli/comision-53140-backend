import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{

    let products=[{id:1, title:"Peine"}, {id:2, title:"Brocha"}]

    res.status(200).render('home',{
        products
    })
})

router.get('/chatws',(req,res)=>{


    res.status(200).render('chat')
})




