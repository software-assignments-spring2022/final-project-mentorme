// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests

// requiring to use the routes from rateMentorRoutes.js - as mentioned
const rateMentor = require('./rateMentorRoutes')
const login = require('./login')
const userprofile = require('./userprofile')
const editprofile = require('./editprofile')
const individualprofile = require('./individualprofile')
const search = require('./search')
// we will put some server logic here later...
app.use(morgan("dev"))


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

app.get("/mentorMe" , (req, res) => {
    res.send("MentorMe Home")
})

app.get("/chat", (req, res) => {
    res.send("Hello!!")
})


// using the app.use to use the routes that I created inside the rateMentorRoutes.js file.
app.use('/mentorMe/profileDisplay/individualProfile/individualChat', rateMentor);
app.use('/login', login);
app.use("/mentorMe/UserProfile", userprofile);
app.use("/mentorMe/UserProfile/EditProfile", editprofile);
app.use("/mentorMe/profileDisplay/individualProfile", individualprofile);
app.use("/", search);

// export the express app we created to make it available to other modules
module.exports = app