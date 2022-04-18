const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    id: {type:Number,

    },
        score:{
            type:Number,
        }, 
        category1:{
            type:Number,
        },
        category2:{
            type:Number,
        },
        category3:{
            type:Number,
        },
        category4:{
            type:Number,
        },
        written_feedback:{
            type:String,
            required: true
        },
        timestamp: {
            type: String,
            required: true
        }

    })

    const Comments = mongoose.model('Comments', commentSchema,'comments' );


    module.exports = {
        Comments,
    }