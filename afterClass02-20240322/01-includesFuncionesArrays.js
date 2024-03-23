
// constructor()

// getProducts 

// async addProduct(nombre, codigo...){
//     let products=await this.getProducts()
//     // this.products

//     // ... hacen lo que corresponda a la funcion ...
//     // generan id... arman nuevoprod...
//     // products.push(nuevoproducto)

//     // grabar archivo

// }


let numeros=[1,2,3,4,5]
// includes
console.log("incluye 3?",numeros.includes(3))
console.log("incluye 100?",numeros.includes(100))

// map
let cuadrados=numeros.map(numero=>numero**2)
console.log(cuadrados)

let cuadradosPares=numeros.map(numero=>{
    if(numero%2===0){
        return numero**2
    }else{
        return numero
    }
})

console.log(cuadradosPares)

cuadrados=numeros.map((numero, indice, arrayOriginalCompleto)=>{

    console.log(`recorriendo el indice ${indice}, tiene valor ${numero}, y el arreglo orig es ${arrayOriginalCompleto}`)
    return numero**2

})
console.log("cuadrados:",cuadrados)


// reduce
let sumatoria=numeros.reduce((acum, numero, indice, arrayOriginalCompleto)=>{

    console.log(`valor acum= ${acum}, recorriendo el indice ${indice}, tiene valor ${numero}, y el arreglo orig es ${arrayOriginalCompleto}`)
    return acum+=numero*100

}, 0)
console.log("sumatoria:",sumatoria)

sumatoria=numeros.reduce((acum, numero, indice, arrayOriginalCompleto)=>{

    console.log(`valor acum= ${acum}, recorriendo el indice ${indice}, tiene valor ${numero}, y el arreglo orig es ${arrayOriginalCompleto}`)
    return acum+=numero*100

})
console.log("sumatoria:",sumatoria)

// forEach
numeros.forEach((numero, indice, arrayOriginalCompleto)=>{

    console.log(`recorriendo el indice ${indice}, tiene valor ${numero}, y el arreglo orig es ${arrayOriginalCompleto}`)

})
console.log("numeros:",numeros)

// find
let busqueda=numeros.find(num=>num===3)
console.log("busqueda elemento",busqueda)
// findIndex
busqueda=numeros.findIndex(num=>num===3)
console.log("busqueda indice",busqueda)

let nombres=['Martina', 'Mariela', 'Sandra', 'Ana', 'Jimena', 'Marcelo', 'Julian', 'Ernesto']
console.log("incluye Sandra?",nombres.includes("Sandra"))
console.log("incluye Jaime?",nombres.includes("Jaime"))

// every
console.log("mayores a 0?",numeros.every(numero=>numero>0))
console.log("mayores a 3?",numeros.every(numero=>numero>3))

// nombre, apellido, email, domicilio, edad

// {nombre:"Julian", edad:38, simpatizaCon: "Gimnasia y Esgrima LP"}
const updateUser=(idUsuario, valoresAModificar={})=>{
    let propiedadesValidas=["nombre", "apellido", "email", "domicilio", "edad"]
    let propiedades=Object.keys(valoresAModificar)
    console.log(propiedades)
    let valido=true
    propiedades.forEach(prop=>{
        if(!propiedadesValidas.includes(prop)){
            valido=false
            console.log(`La propiedad ${prop} no se puede modificar o no existe. Propiedades validas: ${JSON.stringify(propiedadesValidas)}`)
        }
    })
    if(valido){
        // modifican
    }else{
        // devuelven error
    }

}

updateUser(100, {id:90, nombre:"Julian", edad:38, simpatizaCon: "Gimnasia y Esgrima LP"})
updateUser(100, {edad:38})

let usuarios=[{id:1,nombre:"Juan", edad:22}, {id:2,nombre:"Marta", edad:30}]
const updateUser2=(idUsuario, valoresAModificar={})=>{
    let propiedadesValidas=["nombre", "apellido", "email", "domicilio", "edad"]
    let propiedades=Object.keys(valoresAModificar)
    let valido=propiedades.every(prop=>propiedadesValidas.includes(prop))
    if(valido){
        // modifican
        console.log("modifica")
    }else{
        // devuelven error
        console.log("NO modifica")
    }

    let indiceUsuario=usuarios.findIndex(usuario=>usuario.id===idUsuario)
    if(indiceUsuario===-1){
        console.log(`No existe `)
        return 
    }

    usuarios[indiceUsuario]={
        ...usuarios[indiceUsuario], // operador spread
        ...valoresAModificar,
        id:idUsuario
    }
    // us={
    //     id:1,nombre:"Juan", edad:22,
    //     edad:38,
    //     id:1
    // }
    

}
updateUser2(100, {id:90, nombre:"Julian", edad:38, simpatizaCon: "Gimnasia y Esgrima LP"})
console.log("original:",usuarios)
updateUser2(1, {edad:38, email:"juan@test.com"})
console.log("modif aplicada:",usuarios)


let dato={
    nombre:"juan",
    ape:"Perez",
    edad:33,
    nombre:"Agustina",
    nombre:"Agustin"
}
console.log(dato)



// uso every e includes para método update:
let propiedadesValidasUsuario=["nombre", "apellido", "edad", "email"]








