const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const advisorIDSchema = new Schema(
    {
    newId:{
        type: Number,
        required: true

    }
})

const AdvisorId = mongoose.model('AdvisorID', advisorIDSchema, 'advisorId' );

module.exports = {
    AdvisorId
}