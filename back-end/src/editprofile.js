const express = require("express");
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const {User} = require("./models/User") 
const multer = require("multer")

router.post("/:useremail", async (req, res) => {
    const userId = req.params.id
    console.log(userId)

    try {
        const userinfo = await User.findOneAndUpdate({ id : userId },
            {   first_name : req.body.first_name, 
                last_name : req.body.last_name, 
                email : req.body.email, 
                bio : req.body.bio, 
                password : req.body.password, 
                profilePic : req.body.profilePic
            })
        res.json(userinfo) 
    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }
})


module.exports = router;