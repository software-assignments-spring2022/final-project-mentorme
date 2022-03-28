const profiles = require('../public/mockProfile.json');
// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
// we will put some server logic here later...
app.use(morgan("dev"))

// handle search get request on advisor page
app.get("/rateAdvisor/searchResult", (req, res) => {
    console.log(req.query)
    res.send("Goodbye world!")
})
// export the express app we created to make it available to other modules
module.exports = app