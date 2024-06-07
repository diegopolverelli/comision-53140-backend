export class JuguetesMemoryDAO{
    static #juguetes=[]

    static getAll(){
        return this.#juguetes
    }

    static create(juguete){
        let id=1
        if(this.#juguetes.length>0){
            id=Math.max(...this.#juguetes.map(d=>d.id))+1
        }

        let nuevoJuguete={id, ...juguete}
        this.#juguetes.push(nuevoJuguete)
        return nuevoJuguete
        
    }
}