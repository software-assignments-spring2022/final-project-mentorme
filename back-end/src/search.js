const profiles = require('./mockAdvisorData');
const express = require("express");
const router = express.Router();
const stringSimilarity = require("string-similarity");
// handle search get request on advisor page. Return the most relevant 3 results. Req should has search term as 'name'
function calulateRank(term, arr) {
    let sim_arr = []
    let output_arr = []
    arr.forEach((item) => {
        let full_name = item.first_name + ' ' + item.last_name
        sim_arr.push(similarity = stringSimilarity.compareTwoStrings(term, full_name));
    })
    for (i = 0; i < 3; i++) {
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

router.get("/", (req, res) => {
    console.log(req.query)
    res.send(calulateRank(req.query.name, profiles))
})

module.exports = router;