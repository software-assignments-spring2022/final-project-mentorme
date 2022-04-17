const express = require("express");
const router = express.Router();
let rates = require("./mockRateMentorData");
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.text())
const {User} =require("./models/User")


router.post("/", async (request, res) => {
    const user = await User.find({})
    console.log(user)
    const data = {
            overall:request.body,
    }
    console.log(request.body);

    //res.send("Data has been sent")
    res.json(data)
})


module.exports = router;
