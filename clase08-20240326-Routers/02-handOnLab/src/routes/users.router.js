const UserManager = require('../dao/UserManager');

const Router=require('express').Router;
const router=Router()

let userManager=new UserManager()

router.get('/',(req,res)=>{

    let users="Devuelve todos los users" // userManager.getAll()

    res.setHeader('Content-Type','application/json')
    res.status(200).json(users)
})

router.delete('/:id',(req,res)=>{

    // let {id}=req.params
    let id=req.params.id

    let resultado=`User ${id} eliminado` // userManager.delete(id)

    res.setHeader('Content-Type','application/json')
    res.status(200).json(resultado)
})


module.exports=router