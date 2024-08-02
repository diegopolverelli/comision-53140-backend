import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
// import Assert from "assert"
import {afterEach, before, describe, it} from "mocha"
import {expect, should} from "chai"

// const assert=Assert.strict
should()

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
// connDB()

describe("Pruebas DAO Users usando CHAI", function(){
    this.timeout(10000)

    // after, before???
    before(async function(){
        this.dao=new Users()
    })

    afterEach(async function(){
        await mongoose.connection.collection("users").deleteMany({email:"test20240801@test.com"})
    })


    it("CHAI: El dao, con su método get, retorna un array de usuarios", async function(){
        let resultado=await this.dao.get()
        // console.log(resultado)

        // assert.equal(Array.isArray(resultado), true)
        expect(Array.isArray(resultado)).to.be.equal(true)
        expect(Array.isArray(resultado)).to.be.true
        expect(Array.isArray(resultado)).not.to.be.false

        if(Array.isArray(resultado) && resultado.length>0){
            // assert.ok(resultado[0].color)
            // assert.ok(resultado[0]._id)
            expect(resultado[0]._id).to.exist
            // assert.ok(resultado[0].email)
            expect(resultado[0].email).to.exist
            expect(resultado[0].email).to.be.ok
            // // console.log(Object.keys(resultado[0]))
            let usuarioDeshidratado=resultado[0].toJSON()
            // assert.equal(Object.keys(usuarioDeshidratado).includes("_id"), true)
            expect(Object.keys(usuarioDeshidratado).includes("_id")).to.be.true
            expect(Object.keys(usuarioDeshidratado)).to.includes("_id")
            // assert.equal(Object.keys(usuarioDeshidratado).includes("email"), true)
            expect(Object.keys(usuarioDeshidratado).includes("email")).to.be.true
            expect(usuarioDeshidratado).to.has.property("email")
        }

    })

    it("CHAI: El dao, con su método save, crea un user en la DB", async function(){
        let resultado=await mongoose.connection.collection("users").findOne({email:"test20240801@test.com"})
        // console.log("resultado", resultado)
        // assert.equal(resultado, null)
        expect(resultado).to.be.null
        expect(resultado).be.null
        // resultado.should.to.be.null

        let mockUser={ first_name:"test", last_name:"test", email:"test20240801@test.com", password:"123" }
        resultado=await this.dao.save(mockUser)
        // console.log(resultado)

        // assert.ok(resultado._id)
        expect(resultado._id).to.exist
        resultado._id.should.exist
        // assert.equal(isValidObjectId(resultado._id), true)
        expect(isValidObjectId(resultado._id)).to.be.true

        resultado=await mongoose.connection.collection("users").findOne({email:"test20240801@test.com"})
        // console.log("resultado", resultado)
        // assert.ok(resultado._id)
        expect(resultado._id).to.be.ok
    })
})
