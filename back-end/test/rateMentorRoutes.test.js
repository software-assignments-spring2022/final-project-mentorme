const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');

const should = require('chai').should();

chai.use(chaiHttp);

describe("POST request to /mentorMe/profileDisplay/individualProfile/individualChat/ratePage", () => {
  it("should respond with the mentor's star rating as a integer value between 1 and 5", async() => {
    const id = "626ef24afebfd0c7c024dea4"
    chai
      .request(server)
      .post("/mentorMe/profileDisplay/individualProfile/individualChat/ratePage/"+id)
      .end((err, res) => {
        res.should.have.status(200)
        res.should.to.be.json;
        done()
      })
  })
})

describe("Get request to /mentorMe/profileDisplay/individualProfile/individualChat/ratePage", () => {
  it("should respond with the all the data related to one mentor", async() => {
    const id = "626ef24afebfd0c7c024dea4"
    chai
      .request(server)
      .get("/mentorMe/profileDisplay/individualProfile/individualChat/ratePage/"+id)
      .end((err, res) => {
        res.should.have.status(200)
        res.should.to.be.json;
        done()
      })
  })
})