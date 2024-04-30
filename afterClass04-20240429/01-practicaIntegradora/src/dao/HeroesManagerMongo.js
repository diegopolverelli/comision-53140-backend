import { heroesModelo } from "./models/heroes.model.js";

export class HeroesManagerMongo{

    async getAll(filtro={}){
        return await heroesModelo.find(filtro).lean()
    }

// Por defecto, si consultan con find o findOne (sin lean()), el resultado está comprendido
// por objetos "hidratados". Esto puede dar problemas en algunos casos. No siempre
// Para evitarlo:
//      - lean() luego del find / findOne
//      - sin el lean, someter cada objeto a .toObject() o .toJSON()

    async getOneBy(filtro={}){
        return await heroesModelo.findOne(filtro).lean()
    }

    async create(heroe){
        return await heroesModelo.create(heroe)
    }

}