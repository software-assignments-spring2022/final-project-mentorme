const express = require("express");
const router = express.Router();
let rates = require("./mockRateMentorData");
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.text())



router.post('/',(request,response,next) => {
    console.log(request.body)
    response.end()
})


module.exports = router;
