const express = require("express");
const router = express.Router();
let rates = require("./mockRateMentorData");
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.text())



router.post("/", (request, res) => {
    const data = {
            overall: 0 ,
    }
    console.log(request.body);

    //res.send("Data has been sent")
    res.json(data)
})


module.exports = router;
