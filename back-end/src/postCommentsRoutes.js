const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
const {Advisor} =require("./models/Advisor")
const {Comments} =require("./models/Comments")

router.post("/:id",(request, res) => {
    const userId = request.params.id
    // const nameData = new Name({firstName:firstName, lastName:lastName});
    // nameData.save().then(res.redirect('/')).catch(err){
    // console.log(err);
    // };
    console.log(userId)
    console.log(request.body.formInput.overall)
    const newComment = new Comments({id:request.params.id,
                                    score:request.body.formInput.overall,
                                    category1:request.body.formInput.category1,
                                    category2:request.body.formInput.category2,
                                    category3:request.body.formInput.category3,
                                    category4:request.body.formInput.category4,
                                    written_feedback:request.body.formInput.comment});
    newComment.save()
});

module.exports = router;