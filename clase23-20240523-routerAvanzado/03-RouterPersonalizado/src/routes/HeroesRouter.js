import { HeroesManager } from "../managers/HeroesManager.js";
import { m1, m2, m3 } from "../middlewares/varios.js";
import { CustomRouter } from "./CustomRouter.js";

let heroesManager=new HeroesManager()

export class HeroesRouter extends CustomRouter{

    init(){
        this.get("/", m1, m2, m3, (req, res)=>{
            let heroes=heroesManager.getHeroes()

            // res.setHeader('Content-Type','application/json');
            // return res.status(200).json({heroes});
            return res.success(heroes)
        })
    }
}  // fin HeroesRouter