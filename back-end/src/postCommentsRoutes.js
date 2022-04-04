const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.text())

router.post("/", (request, res) => {
    const data = {
            overall: request.body.overall,
            category1: request.body.category1,
            category2: request.body.category2,
            category3: request.body.category3,
            category4:request.body.category4,
            comment:request.body.comments,
    }
    console.log(request.body);
    res.json(data)
})

module.exports = router;