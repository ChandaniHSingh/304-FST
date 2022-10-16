const mongoose = require('mongoose')
const loginInfo = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    pwd : {
        type : String,
        required : true
    },
    photo : {
        type : String,
        requied : false
    },
    last_login : {
        type : Date,
        required : false
    },
    created_at : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('login_master',loginInfo)