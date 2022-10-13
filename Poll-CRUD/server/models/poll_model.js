const mongoose = require('mongoose')
const pollInfo = new mongoose.Schema({
    que : {
        type : String,
        required : true
    },
    op1 : {
        type : String,
        required : true
    },
    op2 : {
        type : String,
        required : true
    },
    op3 : {
        type : String,
        required : true
    },
    op4 : {
        type : String,
        required : true
    },
    op1_count : {
        type : Number,
        default : 0
    },
    op2_count : {
        type : Number,
        default : 0
    },
    op3_count : {
        type : Number,
        default : 0
    },
    op4_count : {
        type : Number,
        default : 0
    }

})

module.exports = mongoose.model('poll_master',pollInfo)