const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const loginUrl = require('./routes/login_route')

const upload = require('express-fileupload')

mongoose.connect('mongodb://localhost:27017/login_database')

const app = express()

app.use(express.json())
app.use(cors())

app.use(upload())

app.use('/api',loginUrl)
app.listen(5000,()=>{
    console.log("Srever is Running")
})