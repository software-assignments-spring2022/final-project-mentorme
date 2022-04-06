const express = require("express");
const app = express();
const router = express.Router();
const mockRateMentorData = require('./mockRateMentorData')


router.get("/:id" , (req, res) => {
    const userId = req.params.id
    const user = mockRateMentorData[userId - 1]
    user.bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in auctor justo, id tristique nisi. Sed at massa risus. Nunc imperdiet vehicula sapien, a molestie orci aliquam molestie. Aenean non leo in velit venenatis blandit. Aliquam eu sapien nec nibh imperdiet placerat at vel nibh. Integer rutrum vel massa non blandit. Donec mollis hendrerit"
    user.profilePic = "https://picsum.photos/200/300/"
    
    res.json(user)
})


module.exports = router;