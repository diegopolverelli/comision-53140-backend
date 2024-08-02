import { expect } from 'chai'
import supertest from 'supertest-session'
// import supertest from 'supertest'
import { describe, it } from 'mocha'


const requester = supertest("http://localhost:3000")

describe("Pruebas proyecto current login", function () {

    it("El /current muestra el usuario, si se ha realizado antes login", async function () {

        await requester.get("/login")
        let respuesta = await requester.get("/current")
        let { _body, ok, status, body } = respuesta

        expect(body.usuarioLogueado).to.be.ok
        console.log(body)
        expect(body.usuarioLogueado.name).to.be.ok

    })

})





