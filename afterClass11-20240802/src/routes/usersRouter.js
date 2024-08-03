import { Router } from 'express';
import { modeloUsuarios } from '../dao/models/userModel.js';
export const router = Router()

router.get('/', async (req, res) => {

    let usuarios = await modeloUsuarios.findAll()

    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({ usuarios })
})

router.get('/:id', async (req, res) => {
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese id numérico`})
    }

    let usuario = await modeloUsuarios.findOne({
        where: {
            id
        },
    });
    res.setHeader('Content-Type', 'application/json')
    res.status(200).json({ usuario })
})

router.post("/", async (req, res) => {

    let { nombre, email } = req.body
    if (!nombre || !email) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({ error: `Complete los datos...!!!` })
    }
    // validaciones corren por cuenta del alumno... 
    let existe = await modeloUsuarios.findOne({
        where: {
            email
        },
    });
    if(existe){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ya existe un user con email ${email}`})
    }

    try {
        const nuevoUsuario = await modeloUsuarios.create({ nombre, email });

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({ nuevoUsuario });
    } catch (error) {
        console.log(error);
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json(
            {
                error: `Error inesperado en el servidor - Intente más tarde, o contacte a su administrador`,
                detalle: `${error.message}`
            }
        )
    }

})

router.put('/:id', async (req, res) => {
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese id numérico`})
    }

    let usuario = await modeloUsuarios.findOne({
        where: {
            id
        },
    });

    if(!usuario){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Usuario inexistente con id ${id}`})
    }

    delete req.body.id
    let resultado=await modeloUsuarios.update(
        req.body,
        {
          where: {
            id,
          },
        },
      );

      console.log(resultado)
      if(resultado[0]>0){
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"Modificacion realizada...!!!"});
      }else{
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Error al actualizar...`})
      }
})

router.delete('/:id', async (req, res) => {
    let {id}=req.params
    id=Number(id)
    if(isNaN(id)){
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Ingrese id numérico`})
    }

    let resultado = await modeloUsuarios.destroy({
        where: {
            id
        },
    });

    console.log(resultado)
    if(resultado>0){
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({payload:"Usuario eliminado...!!!"});
      }else{
        res.setHeader('Content-Type','application/json');
        return res.status(400).json({error:`Error al eliminar...`})
      }})