const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.text())
const {Advisor} =require("./models/Advisor")
const {Comments} =require("./models/Comments")

router.post("/:id", async(request, res) => {
    const userId = request.params.id
    console.log(userId)
    try {
        const user = await Comments.find({id:userId})
        const data = {
                    overall: request.body.overall,
                    category1: request.body.category1,
                    category2: request.body.category2,
                    category3: request.body.category3,
                    category4:request.body.category4,
                    comment:request.body.comments,
            }
            console.log(request.body);
            res.json(data)
        console.log(user)
        console.log("found user")
    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }
    
})

module.exports = router;