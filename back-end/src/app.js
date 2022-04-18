// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
const mongoose = require("mongoose");

// connecting database
require('dotenv').config()


mongoose
    .connect(`${process.env.ATLAS_URI}`)
    .then(data => console.log(`Connected to MongoDB`))
    .catch(err => console.error(`Failed to connect to MongoDB: ${err}`))
// console.log(process.env)

// requiring to use the routes from rateMentorRoutes.js - as mentioned
const rateMentor = require('./rateMentorRoutes')
const login = require('./login')
const signup = require('./signup')
const userprofile = require('./userprofile')
const editprofile = require('./editprofile')
const individualprofile = require('./individualprofile')
const chat = require('./chat')
const search = require('./search')
const commentDisplayRoutes = require('./commentDisplayRoutes')
const postCommentRoutes = require('./postCommentsRoutes')
const userRoutes = require('./routes/userRoutes')
// we will put some server logic here later...
app.use(morgan("dev"))
app.use(cors());
const server = http.createServer(app);

//chat

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

// more socket.io implementation
// io.on("connection", socket => {

//     socket.on("join_room", (data) => {
//         socket.join(data);
//         console.log(`User with ID: ${socket.id} joined room: ${data}`);
//     });

//     socket.on("send_message", (data) => {
//         socket.to(data.room).emit("receive_message", data);
//     });

//     socket.on("disconnect", () => {
//         console.log("User Disconnected", socket.id);
//     });
// });

io.on('connection', socket => {
    console.log(`User Connected!!: ${socket.id}`);
    const sid = socket.id;

    socket.on("send-chat-message", message => {
        console.log(message),
            socket.broadcast.emit('chat-message', message, sid)
    })
})


server.listen(3001, () => {
    console.log('listening on *:3001');
});




// This code fixed the errors I was having with front-end haveing an error connecting to the back-end
// There may be a better solution for this
app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
    next();
});



app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// make 'public' directory publicly readable with static content
app.use("/static", express.static("public"))


app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/mentorMe", (req, res) => {
    res.send("MentorMe Home")
})

// app.get("/chat", (req, res) => {
//     res.send("Hello!!")
// })


// using the app.use to use the routes that I created inside the rateMentorRoutes.js file.
app.use("/mentorMe/profileDisplay/individualProfile/individualChat/ratePage", rateMentor);
app.use("/rateAdvisor/searchResult/commentsDisplay/postCommentPage", postCommentRoutes);

app.use('/login', login);
app.use('/signup', signup);

app.use('/chat', chat);
app.use('/users', userRoutes)

app.use("/mentorMe/UserProfile", userprofile);
app.use("/mentorMe/UserProfile/EditProfile", editprofile);
app.use("/", individualprofile);
app.use("/", search);

app.use("/", commentDisplayRoutes)
// export the express app we created to make it available to other modules
module.exports = app