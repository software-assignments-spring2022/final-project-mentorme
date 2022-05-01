const express = require("express");
const router = express.Router();
const { Advisor } = require('./models/Advisor')
const { Comments } = require('./models/Comments')
const { AdvisorId } = require('./models/AdvisorId')

router.post("/rateAdvisor/createAdvisor", async (req, res) => {
  const { firstName, lastName, university, school, department, score, comment } = req.body

  const date = new Date()
  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString()
  const day = date.getDate().toString()

  let id = -1

  // first, check if the advisor already exists
  // otherwise, allocate a new id for this advisor and create a new collection
  const data = { first_name: firstName, last_name: lastName, university, school, department }
  const result = await Advisor.find(data)
  if (result.length > 0) {
    id = result[0].id
  } else {
    const newId = await AdvisorId.find({})
    id = newId[0].newId
    
    // update newId counter
    await AdvisorId.updateOne(newId[0], { newId: id + 1 })

    // create a new collection
    const newAdvisor = new Advisor({ id, first_name: firstName, last_name: lastName, university, school, department, currentScore: score })
    await newAdvisor.save()
  }

  // update the new comment
  const newComment = new Comments({ id, score, written_feedback: comment, timestamp: `${year}-${month}-${day}` })
  newComment.save()

  res.send({ id })
})

module.exports = router