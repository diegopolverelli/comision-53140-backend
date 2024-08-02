import {afterEach, before, describe, it} from "mocha"
import {expect} from "chai"
import supertest from "supertest"
import mongoose, { isValidObjectId } from "mongoose"


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
    })

})