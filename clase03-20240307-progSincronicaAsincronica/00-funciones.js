function suma(a, b){
    return a+b
}

const sumaFlecha=(a,b)=>{
    console.log("ejecutando suma")
    return a+b
    // a+b
}

const sumaFlecha2=(a,b)=>a+b   // return implicito / sin {} (solo cuando tenemos 1 linea de código)
const cuadrado=a=>a*a    // sin () para los argumentos (solo cuando tenemos 1 único argumento)

console.log("Resultado funcion suma \"tradicional\":",suma(4,3))
console.log("Resultado funcion flecha:",sumaFlecha(4,3))
console.log("Resultado funcion flecha (sintáxis abreviada):",sumaFlecha2(4,3))
console.log("Resultado función flecha (sintáxis mínima):",cuadrado(6))

