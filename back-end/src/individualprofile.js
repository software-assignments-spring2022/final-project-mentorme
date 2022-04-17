const express = require("express");
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const {User} = require("./models/User") 


router.get("/:id" , async (req, res) => {

    const userId = req.params.id

    try {
        const user = await User.find({ id : userId })
        res.json(user) 
    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }
})


module.exports = router;