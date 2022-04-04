const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');

const should = require('chai').should();

chai.use(chaiHttp);

describe("GET requests to related to search functions", () => {
    it("advisor search function should respond with an HTTP 200 status code and an object in the response body \n the response body object should contain at least three different properties: id, first name, last name, school, score, field", done => {
      chai
        .request(server)
        .get("/rateAdvisor/searchResult?name=Elyssa")
        .end((err, res) => {
          res.should.have.status(200) // use should to make BDD-style assertions
          res.body.should.be.a("array") // our route sends back an array of object
          res.body[0].should.be.a('object')
          res.body[0].should.have.property("id") // a way to check the exact value of a property of the response object
          res.body[0].should.have.property("first_name")
          res.body[0].should.have.property("last_name")
          res.body[0].should.have.property("score")
          res.body[0].should.have.property("field")
          res.body[0].id.should.be.a("number")
          res.body[0].first_name.should.be.a("string")
          res.body[0].last_name.should.be.a("string")
          res.body[0].score.should.be.a("number")
          res.body[0].field.should.be.a("string")
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })

    it("mentor search function should respond with an HTTP 200 status code and an object in the response body \n the response body object should contain at least three different properties: id, first name, last name, school, currentRate, language, year, major", done => {
        chai
          .request(server)
          .get("/mentorMe/profileDisplay?name=Liam")
          .end((err, res) => {
            res.should.have.status(200) // use should to make BDD-style assertions
            res.body.should.be.a("array") // our route sends back an array of object
            res.body[0].should.be.a('object')
            res.body[0].should.have.property("id") // a way to check the exact value of a property of the response object
            res.body[0].should.have.property("first_name")
            res.body[0].should.have.property("last_name")
            res.body[0].should.have.property("school")
            res.body[0].should.have.property("currentRate")
            res.body[0].should.have.property("language")
            res.body[0].should.have.property("year")
            res.body[0].should.have.property("major")
            res.body[0].id.should.be.a("number")
            res.body[0].first_name.should.be.a("string")
            res.body[0].last_name.should.be.a("string")
            res.body[0].currentRate.should.be.a("number")
            res.body[0].school.should.be.a("string")
            res.body[0].language.should.be.a("string")
            res.body[0].year.should.be.a("string")
            res.body[0].major.should.be.a("string")
            done() // resolve the Promise that these tests create so mocha can move on
          })
      })

      it("chat search function should respond with an HTTP 200 status code and an object in the response body \n the response body object should contain at least three different properties: id, first name, last name, lastChatTime", done => {
        chai
          .request(server)
          .get("/mentorMe/profileDisplay?name=Liam")
          .end((err, res) => {
            res.should.have.status(200) // use should to make BDD-style assertions
            res.body.should.be.a("array") // our route sends back an array of object
            res.body[0].should.be.a('object')
            res.body[0].should.have.property("id") // a way to check the exact value of a property of the response object
            res.body[0].should.have.property("first_name")
            res.body[0].should.have.property("last_name")
            res.body[0].should.have.property("lastChatTime")
            res.body[0].id.should.be.a("number")
            res.body[0].first_name.should.be.a("string")
            res.body[0].last_name.should.be.a("string")
            res.body[0].lastChatTime.should.be.a("number")
            done() // resolve the Promise that these tests create so mocha can move on
          })
      })
})

describe("GET requests to related to filter functions", () => {
    it("advisor filter function should respond with an HTTP 200 status code and an object in the response body \n the response body object should contain at least three different properties: id, first name, last name, school, score, field", done => {
      chai
        .request(server)
        .get("/rateAdvisor/searchResult/2?filter[]=CAS&filter[]=Tandon")
        .end((err, res) => {
          res.should.have.status(200) // use should to make BDD-style assertions
          res.body.should.be.a("array") // our route sends back an array of object
          res.body[0].should.be.a('object')
          res.body[0].should.have.property("id") // a way to check the exact value of a property of the response object
          res.body[0].should.have.property("first_name")
          res.body[0].should.have.property("last_name")
          res.body[0].should.have.property("score")
          res.body[0].should.have.property("field")
          res.body[0].id.should.be.a("number")
          res.body[0].first_name.should.be.a("string")
          res.body[0].last_name.should.be.a("string")
          res.body[0].score.should.be.a("number")
          res.body[0].field.should.be.a("string")
          done() // resolve the Promise that these tests create so mocha can move on
        })
    })

    it("mentor filter function should respond with an HTTP 200 status code and an object in the response body \n the response body object should contain at least three different properties: id, first name, last name, school, currentRate, language, year, major", done => {
        chai
          .request(server)
          .get("/mentorMe/profileDisplay/2?filter[]=Junior&filter[]=English")
          .end((err, res) => {
            res.should.have.status(200) // use should to make BDD-style assertions
            res.body.should.be.a("array") // our route sends back an array of object
            res.body[0].should.be.a('object')
            res.body[0].should.have.property("id") // a way to check the exact value of a property of the response object
            res.body[0].should.have.property("first_name")
            res.body[0].should.have.property("last_name")
            res.body[0].should.have.property("school")
            res.body[0].should.have.property("currentRate")
            res.body[0].should.have.property("language")
            res.body[0].should.have.property("year")
            res.body[0].should.have.property("major")
            res.body[0].id.should.be.a("number")
            res.body[0].first_name.should.be.a("string")
            res.body[0].last_name.should.be.a("string")
            res.body[0].currentRate.should.be.a("number")
            res.body[0].school.should.be.a("string")
            res.body[0].language.should.be.a("string")
            res.body[0].year.should.be.a("string")
            res.body[0].major.should.be.a("string")
            done() // resolve the Promise that these tests create so mocha can move on
          })
      })
})