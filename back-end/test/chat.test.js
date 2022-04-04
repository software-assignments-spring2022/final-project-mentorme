const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/app');
const should = require('chai').should();
const assert = require('chai').assert;
const { createServer } = require("http");
const { Server } = require("socket.io");
const Client = require("socket.io-client");

chai.use(chaiHttp);

describe("GET requests to Chat routing and have socket.io working", () => {
  let io, serverSocket, clientSocket;
  before((done) => {
    const httpServer = createServer();
    io = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = new Client(`http://localhost:${port}`);
      io.on("connection", (socket) => {
        serverSocket = socket;
      });
      clientSocket.on("connect", done);
    });
  });

  after(() => {
    io.close();
    clientSocket.close();
  });
  it("it should respond with an HTTP 200 status code with /chat route", done => {

    chai
      .request(server)
      .get("/chat")
      .end((err, res) => {
        res.should.have.status(200) // use should to make BDD-style assertions
        done() // resolve the Promise that these tests create so mocha can move on
      })
  })
  it("socket.io should be able to send and receive a message ", (done) => {
    clientSocket.on("hello", (arg) => {
      assert.equal(arg, "world");
      done();
    });
    serverSocket.emit("hello", "world");
  });



})
