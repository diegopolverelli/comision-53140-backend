import { heroesModelo } from "./models/heroes.model.js";

export class HeroesManagerMongo{

    async getAll(){
        return await heroesModelo.find()
    }
}