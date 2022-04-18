const express = require("express");
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const {User} = require("./models/User") 


router.post("/:id", async (req, res) => {

    const userId = req.params.id

    try {
        const userinfo = await User.findOneAndUpdate({ id : userId }, { first_name : req.body.username, email : req.body.email, bio : req.body.bio, password : req.body.password})
        res.json(userinfo) 
    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }

})


module.exports = router;