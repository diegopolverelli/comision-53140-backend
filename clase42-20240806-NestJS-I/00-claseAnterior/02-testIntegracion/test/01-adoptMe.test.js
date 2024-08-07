import {afterEach, before, describe, it} from "mocha"
import {expect} from "chai"
import supertest from "supertest"
import mongoose, { isValidObjectId } from "mongoose"
import jwt from "jsonwebtoken"

import fs from "fs"


const requester=supertest("http://localhost:8080")
// let resultado=await requester.get("/api/users")
// console.log(resultado)
// let {body, status, ok, headers}=await requester.get("/api/users")
// console.log(body)


const connDB=async()=>{
    try {
        await mongoose.connect(
            "mongodb+srv://backend53140:CoderCoder@cluster0.5cr4g2l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        {
            dbName: "clase40"
        }
        )
        console.log("DB conectada...!!!")
    } catch (error) {
        console.log(`Error al conectar a DB: ${error}`)
    }
}
connDB()

describe("Prueba proyecto AdoptMe", function(){
    this.timeout(10000)
    let nombreCookie=""
    let valorCookie

    // before ???

    describe("Pruebas router Users", function(){
        afterEach(async function(){
            await mongoose.connection.collection("users").deleteMany({email:"test20240801@test.com"})
        })

        it("La ruta /api/users, en su metodo get, retorna un array de users", async()=>{
            let {body}=await requester.get("/api/users")

            expect(Array.isArray(body.payload)).to.be.true
            expect(body.status).to.exist.and.to.be.equal("success")
        })

        it("La ruta /api/sessions/register, en su metodo post, crea un user", async()=>{
            let mockUser={ first_name:"test", last_name:"test", email:"test20240801@test.com", password:"123" }

            let {body}=await requester.post("/api/sessions/register").send(mockUser)

            expect(body.status).to.exist.and.to.be.equal("success")
            expect(body.payload).to.exist
            expect(isValidObjectId(body.payload)).to.be.true
        })

        it("La ruta /api/sessions/login, en su metodo post, hace login de un user y genera una cookie con un jwt", async()=>{
            let mockUser={ first_name:"test", last_name:"test", email:"test20240801@test.com", password:"123" }

            await requester.post("/api/sessions/register").send(mockUser)
            let {body, header}=await requester.post("/api/sessions/login").send(mockUser)

            // console.log(header["set-cookie"][0].split("=")[0])
            nombreCookie=header["set-cookie"][0].split("=")[0]
            valorCookie=header["set-cookie"][0].split("=")[1].split(";")[0]
            console.log(valorCookie)
            let usuario=jwt.verify(valorCookie, "tokenSecretJWT")
            console.log(usuario)

            expect(body.status).to.exist.and.to.be.equal("success")
            expect(body.message).to.exist.and.to.be.equal("Logged in")
            expect(nombreCookie).to.be.equal("coderCookie")
            expect(usuario.email).to.be.equal(mockUser.email)
            expect(usuario.password).to.be.equal(undefined)
            //Logged in
        })

        it("La ruta /api/sessions/current, metodo get, si recibe una cookie... devuelve el user logueado", async ()=>{
            // this.nombreCookie
            // console.log(prueba)
            let {body}=await requester.get("/api/sessions/current")
                                    .set("Cookie", `${nombreCookie}=${valorCookie};`)

            console.log(body)
        })
    })

    describe("Pruebas router pets", function(){

        afterEach(async function(){
            await mongoose.connection.collection("pets").deleteMany({specie:"testing"})
        })

        it("La ruta /api/pets/withImage en su metodo post, crea una mascota y acepta una imagen", async()=>{
            let mockPet={
                name:"Roger", 
                specie:"testing",
                birthDate: "2021-04-04"
            }

            let {body}=await requester.post("/api/pets/withImage")
                                        .field("name", mockPet.name)
                                        .field("specie", mockPet.specie)
                                        .field("birthDate", mockPet.birthDate)
                                        .attach("image","./test/img-roger.jpg")

            expect(body.status).to.be.equal("success")
            expect(isValidObjectId(body.payload._id)).to.be.true
            expect(fs.existsSync(body.payload.image)).to.be.true
            fs.unlinkSync(body.payload.image)

        })
    })

})