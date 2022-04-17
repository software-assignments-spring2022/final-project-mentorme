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
    comments:{
        amount:{
            type:Number,
            required: true
        },
        score:{
            type:Number,
            required: true
        }, 
        category1:{
            type:Number,
            required: true
        },
        category2:{
            type:Number,
            required: true
        },
        category3:{
            type:Number,
            required: true
        },
        category4:{
            type:Number,
            required: true
        },
        written_feedback:{
            type:Array,
            required: true
        }

    }
})

var SomeModel = mongoose.model('Advisor', advisorSchema );