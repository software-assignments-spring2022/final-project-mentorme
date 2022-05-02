// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const server = require('../src/app');

// const should = require('chai').should();

// chai.use(chaiHttp);

// describe("POST request to /mentorMe/UserProfile/EditProfile route", () => {
//   it("it should respond with an HTTP 200 status code and an object in the response body \n the response body object should contain three different properties: a username, bio, and profilePic", done => {
//     chai
//       .request(server)
//       .post("/mentorMe/UserProfile/EditProfile")
//       .end((err, res) => {
//         res.should.have.status(200) // use should to make BDD-style assertions
//         res.body.should.be.a("object") // our route sends back an object
//         done() // resolve the Promise that these tests create so mocha can move on
//       })
//   })
// })