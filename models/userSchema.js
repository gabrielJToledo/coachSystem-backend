const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        lowercase: true,
        unique: true
    },
    password: {
        type: String
    },
    admin: {
        type: Boolean,
        default: false
    }
})

const Users = mongoose.model('Users', usersSchema)

module.exports = Users