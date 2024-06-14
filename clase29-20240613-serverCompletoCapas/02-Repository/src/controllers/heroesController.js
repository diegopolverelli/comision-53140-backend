// import { MemoryHeroesDAO as DAO } from "../dao/memoryHeroesDAO.js"
// let heroesService=new DAO()

import { heroesService } from "../repository/heroes.service.js"

async function getHeroes(req,res){

    let heroes=await heroesService.getHeroes()

    res.status(200).json({heroes})
}

export default {getHeroes}