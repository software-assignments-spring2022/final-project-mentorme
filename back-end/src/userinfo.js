const express = require("express");
const app = express();
const router = express.Router();

const user = {};

router.get('/', (req, res) => {
  const auth = req.query.auth;
  console.log(auth);


  if (auth == "false") {
    user.auth = true;
    user.name = req.query.name;
    user.pic = req.query.pic;
    user.email = req.query.email;
    user.id = req.query._id;
  }


  res.json(user)
});

// router.get('/:id', (req, res) => {
//   const id = router.param('id');
//   console.log(id);
// })

// router.post("/", (req, res) => {
//   const data = {
//     picture: req.body.pic
//   }
//   console.log(req.body.pic);
//   // res.send("Data has been sent")
//   pic = req.body.pic;
//   res.send(req.body.pic)
// })


module.exports = router;

