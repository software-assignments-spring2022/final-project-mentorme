const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');

const should = require('chai').should();

chai.use(chaiHttp);

describe("POST request to /rateAdvisor/searchResult/commentsDisplay/postCommentPage", () => {
  it("should respond with the comments for a single advisor", async() => {
    const id = "626dd5b678d864743b8b4ac2"
    chai
      .request(server)
      .post("/rateAdvisor/searchResult/commentsDisplay/postCommentPage/"+id)
      .end((err, res) => {
        res.should.have.status(200)
        res.should.to.be.json;
        res.body.should.be.a('object');
        console.log(res)
        done()
      })
  })
})