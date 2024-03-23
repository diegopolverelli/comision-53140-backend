

// operador Spread:   ...
// Spread objetos:
let defensa={
    primerCentral:'Romero',
    lateralIzquierdo:'Montiel',
    lateralDerecho:'Tagliafico',
    segundoCentral:'Otamendi',
    otroPuesto:"otro Jugador"
}

let medio={
    nro5:'Paredes',
    nro8:'DePaul',
    nro7:'DiMaria',
    nro14:'Enzo'
}

let ataque={
    el10:'Lio',
    el9:'Julian',
}


const equipo={
    arquero:"Martinez",
    // lateralDerecho:defensa.lateralDerecho,
    // lateralIzquierdo:defensa.lateralIzquierdo
    ...defensa,
    ...medio,
    ...ataque,
    lateralDerecho:"Acuña",
    lateralDerecho:"Perez",
    lateralDerecho:"Ibarra",

}

console.log(equipo)


// Spread arrays:
let numeros=[1,2,3,4, 10,20,30]
let numeros2=[5,6,7,8]
let todosLosNumeros=[...numeros,...numeros2] 
console.log(todosLosNumeros)

// Spread con funciones
const suma=(a, b, c, d)=>a+b+c+d
console.log(suma(5,5,5,5))
console.log(suma(...numeros))





// operador Rest: ...

const suma2=( ...otrosArgumentos)=>{

    console.log({ otrosArgumentos})
    let resultado=0
    otrosArgumentos.forEach(n=>resultado+=n)

    return resultado
}

console.log(suma2(3,3,10))
console.log(suma2(3,3))
console.log(suma2(3))
console.log(suma2(3,5,6,4,100,200,900))
console.log(suma2())








// desestructuracion:
// de objetos:
// let paredes=equipo.nro5
// let depaul=equipo.nro7

let {nro5:jugadorParedes, nro7, el10, lateralIzquierdo, aguatero}=equipo
console.log(nro7)
console.log(el10)
console.log(jugadorParedes)
console.log(aguatero)

const buscaDatos=()=>{
    // fetch  api...
    return {nombre:"Juan", apellido:"Gonzalez", edad:25}
}

let {apellido:last_name, nombre:fist_name}=buscaDatos()
console.log(last_name, fist_name)

// desestructuracion de arrays:
let heroes=["Superman", "Hulk", "Black-Widow", "Mujer Maravilla", "Batman", "Robin"]
let [h1, h2, h3]=heroes
console.log(h1, h2, h3)

let [,,heroina1, heroina2, ,heroe3]=heroes
console.log(heroina1, heroina2, heroe3)

let [he1, he2, ...otrosHeroes]=heroes
console.log(he1, he2, otrosHeroes)

// let rta=fetch("https://swapi.dev/api/people")
//             .then(data=>data.json())
//             .then(resultado=>{
//                 // console.log(resultado)
//                 let {results}=resultado
//                 // console.log(results)
//                 results.forEach(p=>console.log(p.name.toUpperCase()))
//             })

const entorno=async()=>{
    let rta=await fetch("https://swapi.dev/api/people")
    let {results}=await rta.json()

    // results.forEach(p=>console.log(p.name.toUpperCase()))
    results.forEach(p=>{
        let {name, hair_color, films }=p
        console.log(name, films, hair_color)
    })
}

entorno()

console.log(suma2(...numeros))


