const express = require("express");
const router = express.Router();
let rates = require("./mockRateMentorData");
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.text())
const {User} =require("./models/User")
router.get("/:id", async (req, res) => {
    const userId = req.params.id

    try {
        const user = await User.find({ _id : userId })
        res.json(user) 
        console.log(user)

    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }

})

router.post("/:id", async (request, res) => {
    const userId = request.params.id
    console.log(userId)
    console.log(request.body.formInput.overall);
    try {
        const user = await User.findOneAndUpdate({ _id : userId },{$push:{rates:request.body.formInput.overall}},{ upsert: true })
        const arrayOfRates = user.rates
        console.log(arrayOfRates)
        let totalscore =0
        for (let i = 0; i < arrayOfRates.length; i++) { 
            totalscore += parseInt(arrayOfRates[i])
          }
        const avg =totalscore/arrayOfRates.length
        console.log(avg)
        const userRate = await User.findOneAndUpdate({ _id : userId },{over_all:avg})
        // const newOverall = await User.findOneAndUpdate({ id : userId },)

        console.log(user)
    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }

    })
    


module.exports = router;
