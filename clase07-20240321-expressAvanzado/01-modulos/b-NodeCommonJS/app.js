const Persona=require("./Persona")
const varios=require("./varios")
const suma=require("./varios").f1
const resta=require("./varios").f2

const {f1, usuarios:users} = require("./varios")

const fs=require("fs")
// fs.promises.writeFile
const fsConPromesas=require("fs").promises

const path = require("path")
const {join}= require("path")
// path.join


// let rutaArchivo="./archivos/file.txt"
let rutaArchivo=join(__dirname, "archivos", "file.txt")

fsConPromesas.writeFile(rutaArchivo, "Hola...!!!")
            .then(()=>console.log("Archivo creado...!!!"))

let persona01=new Persona("Juan", "Perez")
console.log(persona01.saludo())

console.log(varios.f1(10,11))
console.log(varios.usuarios)

let heroe01=new varios.Heroe("Batman", "Bruce Wayne")
console.log(heroe01.verIdentidad())

console.log(suma(5,5))
console.log(resta(15,5))

console.log(users)

console.log(require("./varios").f2(100,20))


