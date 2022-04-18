const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const advisorSchema = new Schema(
    {
    id:{
        type: Number,
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
    university: {
        type: String,
        required: true
    },
    school: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    currentScore:{
        type: Number,
        required: true
    }
})

const Advisor = mongoose.model('Advisor', advisorSchema, 'advisorinfo' );

module.exports = {
    Advisor,
}