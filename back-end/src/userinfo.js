const express = require("express");
const app = express();
const router = express.Router();


router.get('/', (req, res) => {
  res.send("pic")
})

router.get('getUser/:id', (req, res) => {
  //  int id = router.param('id');
})

router.post("/", (req, res) => {
  const data = {
    picture: req.body.pic
  }
  console.log(req.body.pic);
  // res.send("Data has been sent")
  pic = req.body.pic;
  res.send(req.body.pic)
})


module.exports = router;

