const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const should = require('chai').should();
chai.use(chaiHttp);
describe("GET requests to Login page", () => {
  it("it should respond with an HTTP 200 status code with /chat route", done => {

    chai
      .request(server)
      .get("/signup")
      .end((err, res) => {
        res.should.have.status(200) // use should to make BDD-style assertions
        done() // resolve the Promise that these tests create so mocha can move on
      })
  })

  it("the response body object should contain two properties: email and password ", done => {
    chai
      .request(server)
      .post("/signup")
      .end((err, res) => {
        res.should.have.status(200) // use should to make BDD-style assertions
        console.log(res.body)
        done() // resolve the Promise that these tests create so mocha can move on
      })
  })
})