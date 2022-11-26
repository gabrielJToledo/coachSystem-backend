const express = require('express')
const app = express()

require('dotenv').config()
require('../config/middlewares')(app)
require('../infra/mongodb')(app)
require('../config/routes')(app)

app.listen(process.env.BACKEND_PORT, () => { console.log(`Backend sendo executado na porta ${process.env.BACKEND_PORT}`)})