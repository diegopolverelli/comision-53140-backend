import { Router } from 'express';
import { HeroesManagerMongo as HeroesManager} from '../dao/HeroesManagerMongo.js';
export const router=Router()

let heroesManager=new HeroesManager()

router.get('/heroes',async(req,res)=>{

    let heroes
    try {
        heroes=await heroesManager.getAll()
        
    } catch (error) {
        
    }
    console.log(heroes)
    // console.log(heroes[0].toJSON())
    let heroeFake=  {
        _id: "new ObjectId('662a370fa09d768648e3fb3f')",
        name: 'Batman',
        createdAt: "2024-04-25T10:57:19.365Z",
        updatedAt: "2024-04-25T10:57:19.365Z",
        __v: 0
      }
      console.log(heroeFake)
    //   console.log(Object.keys(heroes[0].toJSON()))
      console.log(Object.keys(heroeFake))
    //   heroes=heroes.map(h=>h.toJSON())

    res.setHeader('Content-Type','text/html')
    res.status(200).render("heroes", {
        heroes
    })
})