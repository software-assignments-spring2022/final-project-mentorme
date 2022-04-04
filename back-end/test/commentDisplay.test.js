const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');

const should = require('chai').should();

chai.use(chaiHttp);

describe("POST request to /rateAdvisor/commentDisplay/id route", () => {
  it("should respond with the advisor's information and comments", done => {
    chai
      .request(server)
      .get("/rateAdvisor/commentDisplay/1")
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a("object")
        res.body.should.have.property("info")
        res.body.should.have.property("comments")
        res.body.info.should.be.a("object")
        res.body.comments.should.be.a("array")
        done()
      })
  })
})