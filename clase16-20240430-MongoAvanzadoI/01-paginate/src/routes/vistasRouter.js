import { Router } from 'express';
import { UsuariosMongoManager as UsuariosManager } from '../dao/UsuariosManagerMONGO.js';
export const router=Router()

const usuariosManager=new UsuariosManager()

router.get('/usuarios',async(req,res)=>{

    let {pagina}=req.query
    if(!pagina) pagina=1

    let {docs:usuarios, page, totalPages, hasPrevPage, hasNextPage, prevPage, nextPage}= await usuariosManager.getAllPaginate(pagina)
    console.log(usuarios)

    

    res.setHeader('Content-Type','text/html')
    res.status(200).render("usuarios", {
        usuarios, page, totalPages, hasPrevPage, hasNextPage, prevPage, nextPage
    })
})