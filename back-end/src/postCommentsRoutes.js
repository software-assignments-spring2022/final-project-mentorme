const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.text())
const {Advisor} =require("./models/Advisor")
const {Comments} =require("./models/Comments")

router.post("/:id", async(request, res) => {
    const userId = request.params.id
    // const nameData = new Name({firstName:firstName, lastName:lastName});
    // nameData.save().then(res.redirect('/')).catch(err){
    // console.log(err);
    // };
    console.log(userId)
    const data = {
        overall: request.body.overall,
        category1: request.body.category1,
        category2: request.body.category2,
        category3: request.body.category3,
        category4:request.body.category4,
        comment:request.body.comments,
    };
    const newComment = new Comments({id:userId,score:data.overall,
                                    category1:data.category1,
                                    category2:data.category2,
                                    category3:data.category3,
                                    category4:data.category4,
                                    written_feedback:data.comment});
    newComment.save().then(res.redirect('/'))
        .catch(err => {});
    console.log(comments)
});

module.exports = router;