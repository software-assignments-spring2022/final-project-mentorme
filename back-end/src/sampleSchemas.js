// {id: 1, first_name:'Olivia', last_name:'Smith', 
//         score: 4.9, rates : [5,5,5], 
//         school:'CAS',
//         language: 'English',
//         year: 'First Year',
//         department: 'Math',
//         lastChatTime: 2},
const mongoose = require('mongoose')
const Schema = mongoose.Schema

  const userSchema = new Schema(
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
    school: {
        type: String,
        required: true
      },

    year:{
        type: String,
        required: true

    },
    language :{
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    isMentor:{
        type: Boolean,
        required: true
    },
    rate:{
        overAll:{
            type:Number,
            required: true
        },
        rates:{
            type:Array,
            required: true
        }
    }
}
)

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
}
)

const User = mongoose.model('User', userSchema)
const Advisor = mongoose.model('Advisor', advisorSchema)

// export the model so other modules can import it
module.exports = {
  User,
  Advisor,
}