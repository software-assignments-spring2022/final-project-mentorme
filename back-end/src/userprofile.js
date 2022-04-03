const express = require("express");
const app = express();
const router = express.Router();


router.get("/", (req, res) => {
    const userinfo = {
         username: "Sarah",
         bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in auctor justo, id tristique nisi. Sed at massa risus. Nunc imperdiet vehicula sapien, a molestie orci aliquam molestie. Aenean non leo in velit venenatis blandit. Aliquam eu sapien nec nibh imperdiet placerat at vel nibh. Integer rutrum vel massa non blandit. Donec mollis hendrerit",
         profilePic: "https://picsum.photos/200/300/",
    }
    res.json(userinfo)
})


module.exports = router;