const mongoose = require('mongoose')

const goalsSchema = new mongoose.Schema({
    goal: {
        type: String
    },
    goalPercentage: {
        type: Number
    },
    currentPercentage: {
        type: Number
    },
    unitMeasurement: {
        type: String
    },
    startData: {
        type: String
    },
    endData: {
        type: String
    },
    obs: {
        type: String
    },
    email: {
        type: String
    }
})

const Goals = mongoose.model('Goals', goalsSchema)

module.exports = Goals 