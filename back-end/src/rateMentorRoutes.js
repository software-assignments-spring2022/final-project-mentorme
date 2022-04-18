const express = require("express");
const router = express.Router();
let rates = require("./mockRateMentorData");
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.text())
const {User} =require("./models/User")


router.post("/:id", async (request, res) => {
    const userId = request.params.id
    console.log(userId)
    console.log(request.body.overall);
    try {
        const user = await User.find({ id : userId })
        console.log(user)
        res.json(user) 
    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }

    

})


module.exports = router;
