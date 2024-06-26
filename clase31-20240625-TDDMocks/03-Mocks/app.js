import {fakerES_MX as faker} from "@faker-js/faker"

// console.log(faker.animal.dog())
// console.log(faker.color.rgb())
// let nombre=faker.person.firstName("female")
// let apellido=faker.person.lastName()
// console.log(nombre)
// console.log(apellido)
// console.log(faker.internet.email({firstName:nombre, lastName:apellido}))

const generaCliente=()=>{
    let nombre=faker.person.firstName("female")
    let apellido=faker.person.lastName()
    let email=faker.internet.email({firstName:nombre, lastName:apellido})
    let codigo=faker.database.mongodbObjectId()
    return {
        codigo,
        nombre, 
        apellido, 
        email
    }
}

console.log(generaCliente())