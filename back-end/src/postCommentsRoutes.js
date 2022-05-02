const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended: true}))
router.use(bodyParser.json())
const {Advisor} =require("./models/Advisor")
const {Comments} =require("./models/Comments")

router.post("/:id",async(request, res) => {
    const userId = request.params.id
    const date = new Date()
    const year = date.getFullYear().toString()
    const month = (date.getMonth() + 1).toString()
    const day = date.getDate().toString()
   
    console.log(userId)
    console.log(request.body.formInput.overall)
    const newComment = new Comments({id:request.params.id,
                                    score:request.body.formInput.overall,
                                    written_feedback:request.body.formInput.comment,
                                    timestamp: `${year}-${month}-${day}`
                                });
    newComment.save()
    newComment.createdAt;
    try {
        const comments = await Comments.find({ id : userId })
        console.log(comments.length)
        let totalscore =0
        for (let i = 0; i < comments.length; i++) { 
            totalscore += comments[i]['score']
          }
        const avg =totalscore/comments.length
        const advisor = await Advisor.findOneAndUpdate({ id : userId },{currentScore:avg})
    } catch (e) {
        console.log("Couldn't Find User");
        res.status(500)
    }

});

module.exports = router;