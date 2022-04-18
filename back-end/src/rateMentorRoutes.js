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
    console.log(request.body.formInput.overall);
    try {
        const user = await User.findOneAndUpdate({ id : userId },{$push:{rates:request.body.formInput.overall}},{ upsert: true })
        const arrayOfRates = user.rates
        console.log(user['rates'])
        let avg = (arrayOfRates / arrayOfRates.length)
        console.log(avg)
        // const newOverall = await User.findOneAndUpdate({ id : userId },)

        console.log(user)
    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }

    })
    


module.exports = router;
