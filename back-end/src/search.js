// const { advisorData } = require('./mockAdvisorData');
// const mentorProfiles = require('./mockRateMentorData')
const express = require("express");
const router = express.Router();
const stringSimilarity = require("string-similarity");
const {User} = require("./models/User") 
const {Advisor} = require("./models/Advisor") 
// handle search get request on advisor page. Return the most relevant 5 results. Req should has search term as 'name'
function calulateRank(term, arr) {
    let sim_arr = []
    let output_arr = []
    arr.forEach((item) => {
        let full_name = item.first_name + ' ' + item.last_name
        sim_arr.push(similarity = stringSimilarity.compareTwoStrings(term, full_name));
    })
    for (i = 0; i < 5; i++) {
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

function getAdvisorFilterResult(filterList, arr) {
    let output_arr = []
    arr.forEach((item) => {
        if (filterList.includes(item.school)) {
            output_arr.push(item)
        } else if (filterList.includes(item.field)) {
            output_arr.push(item)
        }
    })
    return output_arr
}

function getMentorFilterResult(filterList, arr) {
    let output_arr = []
    arr.forEach((item) => {
        if (filterList.includes(item.language)) {
            output_arr.push(item)
        } else if (filterList.includes(item.year)) {
            output_arr.push(item)
        } else if (filterList.includes(item.department)) {
            output_arr.push(item)
        }
    })
    return output_arr
}

router.get("/rateAdvisor/searchResult", async (req, res) => {
    const advisorData = await Advisor.aggregate([
        {$project: {_id: 1, id: 1, first_name: 1, last_name: 1}}
    ])
    res.send(calulateRank(req.query.name, advisorData))
})

router.get("/mentorMe/profileDisplay", async (req, res) => {
    const mentorProfiles = await User.aggregate([
        {$project: {_id: 1, id: 1, first_name: 1, last_name: 1}}
    ])
    res.send(calulateRank(req.query.name, mentorProfiles))
})

router.get("/rateAdvisor/searchResult/2", async (req, res) => {
    const advisorData = await Advisor.aggregate([
        {$project: {_id: 1, id: 1, first_name: 1, last_name: 1, school: 1, field: 1}}
    ])
    res.send(getAdvisorFilterResult(req.query.filter, advisorData))
})

router.get("/mentorMe/profileDisplay/2", async (req, res) => {
    const mentorProfiles = await User.aggregate([
        {$project: {_id: 1, id: 1, first_name: 1, last_name: 1, language: 1, year: 1, department: 1}}
    ])
    res.send(getMentorFilterResult(req.query.filter, mentorProfiles))
})

router.get("/mentorMe/UserProfile/ChatsHistory/2", async (req, res) => {
    const mentorProfiles = await User.aggregate([
        {$project: {_id: 1, id: 1, first_name: 1, last_name: 1}}
    ])
    res.send(calulateRank(req.query.name, mentorProfiles))
})

module.exports = router;