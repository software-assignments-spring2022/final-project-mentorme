const express = require("express");
const app = express();
const router = express.Router();


router.get('/', (req, res) => {
  res.send("hello sign up")
})

router.post("/", (req, res) => {
  const data = {
    email: req.body.email,
    password: req.body.password,
    name: req.body.name,
    school: req.body.school,
  }
  console.log(req.body);

  // res.send("Data has been sent")
  res.send(data)
})


module.exports = router;


