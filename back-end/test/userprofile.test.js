const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');

const should = require('chai').should();

chai.use(chaiHttp);

describe("GET request to /mentorMe/UserProfile route", () => {
    it("it should respond with an HTTP 200 status code and an object in the response body \n the response body object should contain three different properties: a username, bio, and profilePic", done => {
      chai
        .request(server)
        .get("/mentorMe/UserProfile")
        .end((err, res) => {
          res.should.have.status(200) // use should to make BDD-style assertions
          res.body.should.be.a("object") // our route sends back an object
          res.body.should.have.property("username") // a way to check the exact value of a property of the response object
          res.body.should.have.property("bio")
          res.body.should.have.property("profilePic")
          res.body.username.should.be.a("string")
          res.body.bio.should.be.a("string")
          res.body.profilePic.should.be.a("string") //for right now while using api instead of database
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })
})