const { advisorData, advisorComments } = require('./mockAdvisorData');
const express = require("express");
const router = express.Router();

router.get("/rateAdvisor/commentDisplay/:id", (req, res) => {
    const id = req.params.id
    // fetch advisor information
    const info = advisorData[id - 1]
    // fetch advisor comment
    const comments = advisorComments

    res.send({
        info, 
        comments
    })
})

module.exports = router