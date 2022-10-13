const express = require('express')
const pollInfo = require('../models/poll_model')
const router = express.Router()

// Add Poll
router.post('/addPoll',async(req,res)=>{
    const newPollInfo = new pollInfo({
        que : req.body.que,
        op1 : req.body.op1,
        op2 : req.body.op2,
        op3 : req.body.op3,
        op4 : req.body.op4,
    })
    newPollInfo.save()
})

// Get All POll
router.get('/getAllPoll',async(req,res)=>{
    const result = await pollInfo.find()
    res.json(result)
})

// Get One POll
router.get('/getOnePoll/:id',async(req,res)=>{
    const result = await pollInfo.findById(req.params.id)
    res.json(result)
})

// Patch One Poll
router.patch('/updateOnePoll/:id',async(req,res)=>{
    const result = await pollInfo.findByIdAndUpdate(req.params.id,{
        que : req.body.que,
        op1 : req.body.op1,
        op2 : req.body.op2,
        op3 : req.body.op3,
        op4 : req.body.op4,
        op1_count : req.body.op1Count,
        op2_count : req.body.op2Count,
        op3_count : req.body.op3Count,
        op4_count : req.body.op4Count
    })
    res.json(result)
})

// Delete One Poll
router.delete('/deleteOnePoll/:id',async(req,res)=>{
    const result = await pollInfo.findByIdAndDelete(req.params.id)
    res.json(result)
})

module.exports = router