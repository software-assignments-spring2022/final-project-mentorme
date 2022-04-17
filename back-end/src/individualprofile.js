const express = require("express");
//const mentorRateData = require("./mockRateMentorData");
const app = express();
const router = express.Router();
const {User} = require("./models/User") 


router.get("/:id" , async (req, res) => {

    const userId = req.params.id
    console.log(userId)

    try {
        const user = await User.find({})
        res.json({
            user: user,
            status: 'all good',
        })
        console.log("found user")
    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }

    // const user = mockRateMentorData[userId - 1]
    // user.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in auctor justo, id tristique nisi. Sed at massa risus. Nunc imperdiet vehicula sapien, a molestie orci aliquam molestie. Aenean non leo in velit venenatis blandit. Aliquam eu sapien nec nibh imperdiet placerat at vel nibh. Integer rutrum vel massa non blandit. Donec mollis hendrerit"
    // user.profilePic = "https://picsum.photos/200/300/"
    // res.json(user)
})


module.exports = router;