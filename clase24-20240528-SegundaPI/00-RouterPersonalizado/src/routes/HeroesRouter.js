import { HeroesManager } from "../managers/HeroesManager.js";
import { m1, m2, m3 } from "../middlewares/varios.js";
import { CustomRouter } from "./CustomRouter.js";

let heroesManager=new HeroesManager()

export class HeroesRouter extends CustomRouter{

    init(){
        this.get("/", ["public"], m1, m2, m3, (req, res)=>{
            let heroes=heroesManager.getHeroes()

            // res.setHeader('Content-Type','application/json');
            // return res.status(200).json({heroes});
            return res.success(heroes)
        })

        this.post("/", ["admin", "premium"], (req, res)=>{
            let {name, ...otros}=req.body        // aquí los ... son operador rest
            if(!name){
                return res.badRequest(`Complete la propiedad name`)
            }

            // console.log(lalala)

            let heroes=heroesManager.getHeroes()
            console.log({name})
            console.log({heroes})
            let existe=heroes.find(h=>h.name.toLowerCase()===name.toLowerCase())
            if(existe){
                return res.badRequest(`El heroe ${name} ya existe en BD`)
            }

            let nuevoHeroe=heroesManager.create({name, ...otros})   // acá ... es el op. spread
            return res.successData("Heroe generado correctamente", nuevoHeroe, 201)

        })
    }
}  // fin HeroesRouter