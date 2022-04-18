const express = require("express");
const mongoose = require('mongoose')
const app = express();
const router = express.Router();
const {User} = require("./models/User") 
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "/uploads")
    },
    filename: function (req, file, cb) {
      const extension = path.extname(file.originalname)
      const basenameWithoutExtension = path.basename(file.originalname, extension)
      const newName = `${basenameWithoutExtension}-${Date.now()}${extension}`
      cb(null, newName)
    },
})

const upload = multer({ storage: storage })

app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static('uploads'));


router.post("/:id", upload.array('profilePic'), async (req, res, next) => {

    const userId = req.params.id

    try {
        const userinfo = await User.findOneAndUpdate({ id : userId }, { first_name : req.body.username, email : req.body.email, bio : req.body.bio, password : req.body.password, profilePic : req.body.profilePic.newName})
        res.json(userinfo) 
    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }

    

})


module.exports = router;