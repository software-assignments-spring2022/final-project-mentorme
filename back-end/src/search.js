const express = require("express");
const router = express.Router();
const Users = require("./models/Users")
const { Advisor } = require("./models/Advisor") 
const ObjectId = require('mongodb').ObjectId;

router.get("/rateAdvisor/searchResult", async (req, res) => {
    // handle inputs
    let { name, options } = req.query
    name = name || ""
    options = options || []
    let singleName = name.trim().replace(/[^a-zA-Z ]/g, "").toLowerCase()
    singleName = singleName.charAt(0).toUpperCase() + singleName.slice(1)
    let firstName = ""
    let lastName = ""
    let nameList = singleName.split(" ")
    if (nameList.length >= 2) {
        nameList = nameList.map(name => name.replace(/[^a-zA-Z]/g, ""))
        firstName = nameList[0]
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        lastName = nameList[nameList.length - 1]
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
    }

    const nameResults = nameList.length === 1 ?
        await Advisor.find({ $or: [{ first_name: new RegExp(singleName) }, { last_name: new RegExp(singleName) }] }) :
        await Advisor.find({ first_name: new RegExp(firstName), last_name: new RegExp(lastName) })


    // filter the results using school
    let result = nameResults
    if (options.length !== 0) {
        result = nameResults.filter(adv => options.includes(adv.school))
    }

    res.send(result)
})

router.get("/mentorMe/profileDisplay", async (req, res) => {
    // handle inputs
    let { name, options, userID } = req.query
    name = name || ""
    options = options || []
    let singleName = name.trim().replace(/[^a-zA-Z ]/g, "").toLowerCase()
    singleName = singleName.charAt(0).toUpperCase() + singleName.slice(1)
    let firstName = ""
    let lastName = ""
    let nameList = singleName.split(" ")
    if (nameList.length >= 2) {
        nameList = nameList.map(name => name.replace(/[^a-zA-Z]/g, ""))
        firstName = nameList[0]
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        lastName = nameList[nameList.length - 1]
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
    }
    console.log(userID)
    const nameResults = nameList.length === 1 ?
        await Users.find({ $or: [{ first_name: new RegExp(singleName), _id: {$ne: new ObjectId(userID)} }, { last_name: new RegExp(singleName), _id: {$ne: new ObjectId(userID)} }] }) :
        await Users.find({ first_name: new RegExp(firstName), last_name: new RegExp(lastName), _id: {$ne: new ObjectId(userID)} })


    // filter the results using school
    let result = nameResults
    // console.log(nameResults)
    if (options.length !== 0) {
        result = nameResults.filter(adv => options.includes(adv.major))
    }

    res.send(result)
})

module.exports = router;