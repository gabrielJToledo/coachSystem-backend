const mongoose = require('mongoose')
const db = mongoose.connection

mongoose.connect(process.env.MONGODB_PORT)

db.on("error", () => { console.log('Error connection!')})

db.once("open", () => { console.log("Success")})

module.exports = app => { mongoose }