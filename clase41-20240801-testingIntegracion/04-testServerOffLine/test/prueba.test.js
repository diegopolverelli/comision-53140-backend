const supertest = require('supertest');
const chai = require('chai');
const server = require('../server'); // Ruta al archivo server.js

const expect = chai.expect;
const request = supertest(server);

describe('Pruebas del servidor', () => {

  it("La ruta / debería responder con status 200", async()=>{
    let {statusCode, body}=await request.get('/')

    expect(statusCode).is.eq(200)
  })

  it("La ruta /error debería responder con status 400, y con una propiedad status con valor error", async()=>{
    let {statusCode, body}=await request.get('/error')

    expect(statusCode).is.eq(400)
    expect(body.status).is.eq("error")
  })
  
});
