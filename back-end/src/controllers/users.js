const JWT = require('jsonwebtoken');
const User = require('../models/Users');
signToken = user => {
  return JWT.sign({
    iss: 'MentorMe',
    sub: user.id,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 1)
  }, 'mentormeauthentication');

}
module.exports = {
  signUp: async (req, res, next) => {
    console.log('UserController.signUp() called!');
    const { first_name, last_name, school, password, email, picture, bio } = req.value.body;

    const foundUser = await User.findOne({ email });
    if (foundUser) {
      console.log("here")
      return res.status(403).json({ error: "Email is already in use" });

    }
    const newUser = new User({ email, password, school, picture, first_name, last_name, bio });
    await newUser.save();

    // res.json({ user: 'created!' });
    const token = signToken(newUser);

    res.status(200).json({ token, auth: true, user: newUser });
  },

  signIn: async (req, res, next) => {
    const token = signToken(req.user);
    res.status(200).json({ token, auth: true, user: req.user });
  },

  secret: async (req, res, next) => {
    console.log('I managed to get here');
    res.json({ secret: "resource" });

  }
}