const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const pollUrl = require('./routes/poll_route')

mongoose.connect('mongodb://localhost:27017/poll_database')

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api',pollUrl)
app.listen(5000,()=>{
    console.log("Srever is Running")
})