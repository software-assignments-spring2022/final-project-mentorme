const mongoose = require("mongoose");
const { isEmail } = require('validator');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Can't be blank"]
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "Can't be blank"],
    index: true,
    validate: [isEmail, "invalid email"]
  },
  password: {
    type: String,
    required: [true, "Can't be blank"]
  },
  school: {
    type: String,
    required: [true, "Can't be blank"]
  },
  picture: {
    type: String,
  },
  // newMessages: {
  //   type: Object,
  //   default: {}
  // },
  // status: {
  //   type: String,
  //   default: 'online'
  // }
}, { minimize: false });


// UserSchema.pre('save', function (next) {
//   const user = this;
//   if (!user.isModified('password')) return next();
//   bcrypt.genSalt(10, function (err, salt) {
//     if (err) return next(err);
//     bcrypt.hash(user.password, salt, function (err, hash) {
//       if (err) return next(err);
//       user.password = hash
//       next();
//     })
//   })
// })

// UserSchema.methods.toJSON = function () {
//   const user = this;
//   const userObject = user.toObject();
//   delete userObject.password;
//   return userObject;
// }
UserSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(this.password, salt);
    this.password = passwordHash;
    next();
  } catch (error) {
    next(error);
  }
})

UserSchema.methods.isValidPassword = async function (newPassword) {
  try {
    return await bcrypt.compare(newPassword, this.password);
  }
  catch (error) {
    throw new Error(error);
  }
}

// UserSchema.statics.findByCredentials = async function (email, password) {
//   const user = await Users.findOne({ email });
//   if (!user) throw new Error('invalid email or password');

//   const isMatch = await bcrypt.compare(password, user.password);
//   if (!isMatch) throw new Error('invlalid email or password')
//   return user

// }



const Users = mongoose.model('Users', UserSchema);

module.exports = Users 