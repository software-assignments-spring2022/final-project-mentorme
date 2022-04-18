// const { advisorData, advisorComments } = require('./mockAdvisorData');
const express = require("express");
const router = express.Router();
const { Advisor } = require('./models/Advisor')
const { Comments } = require('./models/Comments');

router.get("/rateAdvisor/commentDisplay/:id", async (req, res) => {
    const id = req.params.id
    // fetch advisor information
    const info = await Advisor.find({ id })
    // fetch advisor comment
    const comments = await Comments.find( {id} )

    res.send({
        info: info[0],
        comments
    })
})

module.exports = router