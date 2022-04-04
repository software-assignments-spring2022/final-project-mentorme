const express = require("express");
const app = express();
const router = express.Router();


router.post("/", (req, res) => {
    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password, 
        bio: req.body.bio,
        profilePic: req.body.profilePic
    }
    //res.send("Data has been sent")
    res.json(data)
})


module.exports = router;