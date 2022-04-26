const express = require("express");
const router = express.Router();
const stringSimilarity = require("string-similarity");
const Users = require("./models/Users")
const { Advisor } = require("./models/Advisor") 

// handle search get request on advisor page. Return the most relevant 5 results. Req should has search term as 'name'
function calulateRank(term, arr) {
    let sim_arr = []
    let output_arr = []
    let max_len = 5
    arr.forEach((item) => {
        let full_name = item.first_name + ' ' + item.last_name
        sim_arr.push(similarity = stringSimilarity.compareTwoStrings(term, full_name));
    })
    if  (arr.length < 5){
        max_len = arr.length
    }
    for (i = 0; i < max_len; i++) {
        let max_j = 0
        let max = sim_arr[0]
        for (j = 0; j < sim_arr.length; j++) {
            if (sim_arr[j] > max) {
                max = sim_arr[j];
                max_j = j
            }
        }
        sim_arr[max_j] = Number.NEGATIVE_INFINITY
        output_arr.push(arr[max_j])
        output_arr[output_arr.length - 1].similarity = max
    }
    return output_arr
}

// function getAdvisorFilterResult(filterList, arr) {
//     console.log(filterList)
//     let output_arr = []
//     arr.forEach((item) => {
//         if (filterList.includes(item.school)) {
//             output_arr.push(item)
//         } else if (filterList.includes(item.field)) {
//             output_arr.push(item)
//         }
//     })
//     return output_arr
// }

// function getMentorFilterResult(filterList, arr) {
//     let output_arr = []
//     arr.forEach((item) => {
//         if (filterList.includes(item.language)) {
//             output_arr.push(item)
//         } else if (filterList.includes(item.year)) {
//             output_arr.push(item)
//         } else if (filterList.includes(item.department)) {
//             output_arr.push(item)
//         }
//     })
//     return output_arr
// }

// function getIdFromList(arr){
//     let output_arr = []
//     arr.forEach((item) =>{
//         output_arr.push(item._id)
//     })
//     return output_arr
// }

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
        await Users.find({ $or: [{ first_name: new RegExp(singleName) }, { last_name: new RegExp(singleName) }] }) :
        await Users.find({ first_name: new RegExp(firstName), last_name: new RegExp(lastName) })


    // filter the results using school
    let result = nameResults
    // if (options.length !== 0) {
    //     result = nameResults.filter(adv => options.includes(adv.school))
    // }

    res.send(result)
})

// router.get("/rateAdvisor/searchResult/2", async (req, res) => {
//     const advisorData = await Advisor.aggregate([
//         {$project: {_id: 1, id: 1, first_name: 1, last_name: 1, school: 1, field: 1}}
//     ])
//     const idArr = getIdFromList(getAdvisorFilterResult(req.query.filter, advisorData))
//     const output = await Advisor.aggregate([
//         {$match: {_id: {$in: idArr}}},
//         {$project: {_id:1, id: 1, first_name: 1, last_name: 1, department: 1, currentScore: 1, school: 1, field: 1}},
//         {$addFields: {"__order": {$indexOfArray: [idArr, "$_id" ]}}},
//         {$sort: {"__order": 1}}
//     ])
//     res.send(output)
// })

// router.get("/mentorMe/profileDisplay/2", async (req, res) => {
//     const mentorProfiles = await Users.aggregate([
//         {$project: {_id: 1, id: 1, first_name: 1, last_name: 1, language: 1, year: 1, department: 1, picture: 1}}
//     ])
//     const idArr = getIdFromList(getMentorFilterResult(req.query.filter, mentorProfiles))
//     const output = await Users.aggregate([
//         {$match: {_id: {$in: idArr}}},
//         {$project: {_id:1, id: 1, first_name: 1, last_name: 1, bio: 1, over_all: 1, school: 1}},
//         {$addFields: {"__order": {$indexOfArray: [idArr, "$_id" ]}}},
//         {$sort: {"__order": 1}}
//     ])
//     res.send(output)
// })

router.get("/mentorMe/UserProfile/ChatsHistory/2", async (req, res) => {
    const mentorProfiles = await Users.aggregate([
        {$project: {_id: 1, id: 1, first_name: 1, last_name: 1}}
    ])
    res.send(calulateRank(req.query.name, mentorProfiles))
})

module.exports = router;