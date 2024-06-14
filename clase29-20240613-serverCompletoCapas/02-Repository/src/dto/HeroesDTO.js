export class HeroesDTO{
    constructor(heroe){
        this.nombre=heroe.name.toUpperCase()
        this.identidad=heroe.alias.toUpperCase()
    }
}