import colors from "colors"
import { suma } from "./suma.js"

let contadorPruebas=0
let contadorOK=0
let resultado
let esperado
console.time("Tiempo de ejecución del test:")

// -----
contadorPruebas++
console.log(`Prueba ${contadorPruebas}: si la fn recibe 2 argumentos, retorna la suma de ambos`)
resultado=suma(4,5)
esperado=9
if(resultado===esperado){
    contadorOK++
    console.log(`${"√".green} Prueba correcta`)
}else{
    console.log(`Prueba fallida. Se esperaba ${String(esperado).green} y se retorno ${String(resultado).red}`)
}
console.log("")

// -----
contadorPruebas++
console.log(`Prueba ${contadorPruebas}: si la fn recibe 2 argumentos, retorna la suma de ambos`)
resultado=suma(0.1,0.2)
esperado=0.3
if(resultado===esperado){
    contadorOK++
    console.log(`${"√".green} Prueba correcta`)
}else{
    console.log(`Prueba fallida. Se esperaba ${String(esperado).green} y se retorno ${String(resultado).red}`)
}
console.log("")



// -----
contadorPruebas++
console.log(`Prueba ${contadorPruebas}: si la fn no recibe argumentos, retorna null`)
resultado=suma()
esperado=null
if(resultado===esperado){
    contadorOK++
    console.log(`${"√".green} Prueba correcta`)
}else{
    console.log(`Prueba fallida. Se esperaba ${String(esperado).green} y se retorno ${String(resultado).red}`)
}
console.log("")


// -----
contadorPruebas++
console.log(`Prueba ${contadorPruebas}: si la fn recibe argumentos no numéricos, retorna "error"`)
resultado=suma(1,"juan")
esperado="error"
if(resultado===esperado){
    contadorOK++
    console.log(`${"√".green} Prueba correcta`)
}else{
    console.log(`Prueba fallida. Se esperaba ${String(esperado).green} y se retorno ${String(resultado).red}`)
}
console.log("")


// -----
contadorPruebas++
console.log(`Prueba ${contadorPruebas}: si la fn recibe n argumentos, todos numéricos, retorna la suma de todos ellos`)
resultado=suma(1, 2, 3, 4, 5)
esperado=15
if(resultado===esperado){
    contadorOK++
    console.log(`${"√".green} Prueba correcta`)
}else{
    console.log(`Prueba fallida. Se esperaba ${String(esperado).green} y se retorno ${String(resultado).red}`)
}
console.log("")


// ------
console.log(`Resultado del test: pruebas realizadas: ${contadorPruebas}`)
console.log(`Pruebas correctas: ${String(contadorOK).green} / ${contadorPruebas}`)
console.log(`Pruebas fallidas: ${String(contadorPruebas-contadorOK).red} / ${contadorPruebas}`)

console.timeEnd("Tiempo de ejecución del test:")
