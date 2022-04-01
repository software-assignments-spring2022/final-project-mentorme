const profiles = require('../public/mockProfile.json');
// import and instantiate express
const express = require("express") // CommonJS import style!
const app = express() // instantiate an Express object
const morgan = require("morgan") // middleware for nice logging of incoming HTTP requests
const stringSimilarity = require("string-similarity");
// we will put some server logic here later...
app.use(morgan("dev"))



app.use(express.json()) // decode JSON-formatted incoming POST data
app.use(express.urlencoded({ extended: true })) // decode url-encoded incoming POST data

// make 'public' directory publicly readable with static content
app.use("/static", express.static("public"))



// handle search get request on advisor page. Return the most relevant 3 results. Req should has search term as 'name'
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

app.get("/", (req, res) => {
    res.send("Home")
})

app.get("/mentorMe" , (req, res) => {
    res.send("MentorMe Home")
})

app.get("/mentorMe/UserProfile", (req, res) => {
    const userinfo = {
        name: "UserName",
        bio: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in auctor justo, id tristique nisi. Sed at massa risus. Nunc imperdiet vehicula sapien, a molestie orci aliquam molestie. Aenean non leo in velit venenatis blandit. Aliquam eu sapien nec n",
        profilepic: "https://picsum.photos/200/300/",
    }
    res.json(userinfo)
})

app.get("/mentorMe/UserProfile/EditProfile", (req, res) => {
    const userinfo = {
        name: "UserName",
        bio: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in auctor justo, id tristique nisi. Sed at massa risus. Nunc imperdiet vehicula sapien, a molestie orci aliquam molestie. Aenean non leo in velit venenatis blandit. Aliquam eu sapien nec n",
        profilepic: "https://picsum.photos/200/300/",
        email: "UserName@gmail.com",
        password: "thePassword123",
    }
    res.json(userinfo)
})

app.get("/mentorMe/profileDisplay/individualProfile" , (req, res) => {
    res.send("Individual Profile")
})



app.get("/rateAdvisor/searchResult", (req, res) => {
    console.log(req.query)
    res.send(calulateRank(req.query.name, profiles))
})
// export the express app we created to make it available to other modules
module.exports = app