// import Persona from "./Persona.js"
import __dirname from './utils.js'
import Persona from "./Persona.js";
import {usuarios, f1 as suma, f2 as resta, Heroe} from "./varios.js"
import * as varios from "./varios.js"
import * as utilidades from "./varios.js"

import {writeFileSync as grabarArchivo} from "fs"
import {promises as fsConPromesas} from "fs"

import Villano, {f2 as restar, usuarios as user} from "./varios.js"

import {join} from "path"

let rutaArchivo=join(__dirname, "archivos", "file.txt")

grabarArchivo(rutaArchivo, "Chau...!!!")

let persona01=new Persona("Juan", "Lopez")
console.log(persona01.saludo())

console.log(usuarios)
console.log(suma(10,5))

let heroe01=new Heroe("Robin", "R.Tapia")
console.log(heroe01.verIdentidad())

console.log(varios.f1(6,6))

let heroe02=new varios.Heroe("Batman", "Bruce Wayne")
console.log(heroe02.verIdentidad())
console.log(utilidades.f1(9,9))