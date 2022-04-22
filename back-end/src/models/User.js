const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const userSchema = new Schema(

    {
        id: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        picture: {
            type: String
        },
        bio: {
            type: String,
            required: true
        },
        school: {
            type: String,
            required: true
        },
        year: {
            type: String,
            required: true
        },
        language: {
            type: String,
            required: true
        },
        department: {
            type: String,
            required: true
        },
        isMentor: {
            type: Boolean,
            required: true
        },
        over_all: {
            type: Number
        },
        rates: {
            type: Array
        }
    })


const User = mongoose.model('User', userSchema, 'userinfo')

module.exports = {
    User
}