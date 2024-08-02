import Users from "../../src/dao/Users.dao.js";
import mongoose, { isValidObjectId } from "mongoose";
import Assert from "assert"
import {afterEach, before, describe, it} from "mocha"

const assert=Assert.strict

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

describe("Pruebas DAO Users", function(){
    this.timeout(10000)

    // after, before???
    before(async function(){
        this.dao=new Users()
    })

    afterEach(async function(){
        await mongoose.connection.collection("users").deleteMany({email:"test20240801@test.com"})
    })


    it("El dao, con su método get, retorna un array de usuarios", async function(){
        let resultado=await this.dao.get()
        // console.log(resultado)

        assert.equal(Array.isArray(resultado), true)
        if(Array.isArray(resultado) && resultado.length>0){
            // assert.ok(resultado[0].color)
            assert.ok(resultado[0]._id)
            assert.ok(resultado[0].email)
            // console.log(Object.keys(resultado[0]))
            let usuarioDeshidratado=resultado[0].toJSON()
            assert.equal(Object.keys(usuarioDeshidratado).includes("_id"), true)
            assert.equal(Object.keys(usuarioDeshidratado).includes("email"), true)
        }

    })

    it("El dao, con su método save, crea un user en la DB", async function(){
        let resultado=await mongoose.connection.collection("users").findOne({email:"test20240801@test.com"})
        // console.log("resultado", resultado)
        assert.equal(resultado, null)

        let mockUser={ first_name:"test", last_name:"test", email:"test20240801@test.com", password:"123" }
        resultado=await this.dao.save(mockUser)
        // console.log(resultado)

        assert.ok(resultado._id)
        assert.equal(isValidObjectId(resultado._id), true)
        
        resultado=await mongoose.connection.collection("users").findOne({email:"test20240801@test.com"})
        // console.log("resultado", resultado)
        assert.ok(resultado._id)
    })
})
