class Clima{
    static #consultas=0;
    constructor(){}

    getClima(ciudad){
        if(Clima.#consultas>3){
            console.error('Supera el numero de consultas diarias permitidas')
            return 'Supera el numero de consultas diarias permitidas'
        }
        
        Clima.#consultas++;
        let clima=Math.random()*6+27
        return `El clima en ${ciudad} es de ${clima}°`
    }

}

// class Proxy{
//     constructor(){
//         this.serverClima=new Clima()
//         this.cache={}
//     }

//     getClima(ciudad){
//         if(!this.cache[ciudad]){
//             this.cache[ciudad]=this.serverClima.getClima(ciudad)
//         }

//         return this.cache[ciudad]
//     }
// }

let serverClima=new Clima()
// let serverClima=new Proxy()

console.log(serverClima.getClima('Cordoba'));
console.log(serverClima.getClima('Cordoba'));
console.log(serverClima.getClima('Cordoba'));
console.log(serverClima.getClima('Cordoba'));
console.log(serverClima.getClima('Cordoba'));
console.log(serverClima.getClima('Cordoba'));
console.log(serverClima.getClima('Cordoba'));
console.log(serverClima.getClima('Valparaiso'));
console.log(serverClima.getClima('Valparaiso'));
console.log(serverClima.getClima('Valparaiso'));
console.log(serverClima.getClima('Londres'));
console.log(serverClima.getClima('Londres'));
console.log(serverClima.getClima('Londres'));
console.log(serverClima.getClima('Londres'));