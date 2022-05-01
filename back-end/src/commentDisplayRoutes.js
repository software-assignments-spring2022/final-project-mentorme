const express = require("express");
const router = express.Router();
const { Advisor } = require('./models/Advisor')
const { Comments } = require('./models/Comments');

router.get("/rateAdvisor/commentDisplay/:id", async (req, res) => {
    const id = req.params.id
    // fetch advisor information
    const result = await Advisor.find({ id })
    const info = result[0]
    // fetch advisor comment
    const comments = await Comments.find( {id} )

    // update info score
    let score = 0
    comments.forEach(comment => {
        score += comment.score        
    })
    info.currentScore = parseFloat((score / comments.length).toFixed(2))

    res.send({
        info,
        comments
    })
})

module.exports = router