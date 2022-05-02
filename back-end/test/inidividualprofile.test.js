const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');

const should = require('chai').should();

chai.use(chaiHttp);

describe("GET request to /mentorMe/profileDisplay/individualProfile route", () => {
    it("it should respond with an HTTP 200 status code and an object in the response body \n the response body object should contain three different properties: a username, bio, and profilePic", done => {
      chai
        .request(server)
        .get("/mentorMe/profileDisplay/individualProfile/6260fd87533a5c5df7a7c932")
        .end((err, res) => {
          res.should.have.status(200) // use should to make BDD-style assertions
          res.body[0].should.be.a("object") // our route sends back an object
          res.body[0].should.have.property("last_name") // a way to check the exact value of a property of the response object
          res.body[0].should.have.property("bio")
          res.body[0].last_name.should.be.a("string")
          res.body[0].bio.should.be.a("string")
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })
})