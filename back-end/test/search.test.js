const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');

const should = require('chai').should();

chai.use(chaiHttp);

describe("GET requests to related to search functions", () => {
    it("advisor search function should respond with an HTTP 200 status code and an object in the response body \n the response body object should contain at least three different properties: id, first name, last name, school, score, field", done => {
      chai
        .request(server)
        .get("/rateAdvisor/searchResult?name=j")
        .end((err, res) => {
          res.should.have.status(200) // use should to make BDD-style assertions
          res.body.should.be.a("array") // our route sends back an array of object
          res.body[0].should.be.a('object')
          res.body[0].should.have.property("id") // a way to check the exact value of a property of the response object
          res.body[0].should.have.property("first_name")
          res.body[0].should.have.property("last_name")
          res.body[0].should.have.property("university")
          res.body[0].should.have.property("school")
          res.body[0].should.have.property("department")
          res.body[0].should.have.property("currentScore")
          res.body[0].should.have.property("field")
          res.body[0].id.should.be.a("number")
          res.body[0].first_name.should.be.a("string")
          res.body[0].last_name.should.be.a("string")
          res.body[0].university.should.be.a("string")
          res.body[0].school.should.be.a("string")
          res.body[0].department.should.be.a("string")
          res.body[0].currentScore.should.be.a("number")
          res.body[0].field.should.be.a("string")
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })

    it("mentor search function should respond with an HTTP 200 status code and an object in the response body \n the response body object should contain at least three different properties: id, first name, last name, school, currentRate, language, year, major", done => {
        chai
          .request(server)
          .get("/mentorMe/profileDisplay?name=a")
          .end((err, res) => {
            res.should.have.status(200) // use should to make BDD-style assertions
            res.body.should.be.a("array") // our route sends back an array of object
            res.body[0].should.be.a('object')
            res.body[0].should.have.property("first_name")
            res.body[0].should.have.property("last_name")
            res.body[0].should.have.property("email")
            res.body[0].should.have.property("school")
            res.body[0].should.have.property("picture")
            res.body[0].should.have.property("bio")
            res.body[0].should.have.property("over_all")
            res.body[0].should.have.property("rates")
            res.body[0].first_name.should.be.a("string")
            res.body[0].last_name.should.be.a("string")
            res.body[0].email.should.be.a("string")
            res.body[0].school.should.be.a("string")
            res.body[0].picture.should.be.a("string")
            res.body[0].bio.should.be.a("string")
            res.body[0].over_all.should.be.a("number")
            res.body[0].rates.should.be.a("array")
            done() // resolve the Promise that these tests create so mocha can move on
          })
      })
})