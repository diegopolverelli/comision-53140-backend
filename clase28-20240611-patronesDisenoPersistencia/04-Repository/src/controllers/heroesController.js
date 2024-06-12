import { MemoryHeroesDAO as DAO } from "../dao/memoryHeroesDAO.js"

let heroesService=new DAO()

async function getHeroes(req,res){

    let heroes=await heroesService.get()

    res.status(200).json({heroes})
}

export default {getHeroes}