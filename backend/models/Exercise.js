const mongoose = require('mongoose')
const SetSchema = require('./SetSchema')

const Schema = mongoose.Schema


const excerciseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    exerciseType: {
        type: String,
        required: true,
    },
    quantityCode: {
        type: String,
    },
    description: {
        type: String,
    },
    notes: {
        type: String,
    },
    sets: [SetSchema],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
})


module.exports = mongoose.model('Excerice', excerciseSchema)
