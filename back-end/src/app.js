const profiles = require('../public/mockProfile.json');
// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
const stringSimilarity = require("string-similarity");
// we will put some server logic here later...
app.use(morgan("dev"))

// handle search get request on advisor page. Return the most relevant 3 results
function calulateRank (term, arr) {
    let sim_arr = []
    let output_arr = []
    arr.forEach((item)=>{
        let full_name = item.first_name + ' ' + item.last_name
        sim_arr.push(similarity = stringSimilarity.compareTwoStrings(term, full_name));
    })
    for (i = 0; i < 3; i++){
        let max_j = 0
        let max = sim_arr[0]
        for (j = 0; j < sim_arr.length; j++){
            if (sim_arr[j] > max){
                max = sim_arr[j];
                max_j = j
            }
        }
        sim_arr[max_j] = Number.NEGATIVE_INFINITY
        output_arr.push(arr[max_j])
        output_arr[output_arr.length-1].similarity = max
    }
    return output_arr
}

app.get("/rateAdvisor/searchResult", (req, res) => {
    console.log(req.query)
    res.send(calulateRank(req.query.name, profiles))
})
// export the express app we created to make it available to other modules
module.exports = app