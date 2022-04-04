const express = require('express');
const app = express();
const router = express.Router();
const http = require("http");
const server = http.createServer(app);
const cors = require('cors');
const { Server } = require("socket.io")
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});


router.get('/', (req, res) => {

  res.send("hello!!!");
  // req.io.on("connection", (socket) => {

  //   console.log(socket.id);
  //   console.log("hereeeeee!")

  //   req.socket.on("disconnect", () => {
  //     console.log("User Disconnected", socket.id);
  //   });


  // });

})



  ;

module.exports = router;