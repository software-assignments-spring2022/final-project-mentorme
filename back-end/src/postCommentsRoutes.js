const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.text())

router.post("/postCommentPage", (request, res) => {
    const data = {
            overall: 0 ,
            category1: 0,
            category2: 0,
            category3: 0,
            category4: 0,
            comment:" ",
    }
    console.log(request.body);

    //res.send("Data has been sent")
    res.json(data)
})

module.exports = router;