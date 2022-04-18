const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const commentSchema = new Schema({
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
        },
        timestamp: {
            type: Number,
            required: true
        }

    })

    const Comments = mongoose.model('Comments', commentSchema,'comments' );


    module.exports = {
        Comments,
    }