const express = require('express')
const loginInfo = require('../models/login_model')
const router = express.Router()

// Add login
router.post('/addLogin',async(req,res)=>{
    const newLoginInfo = new loginInfo({
        name : req.body.name,
        email : req.body.email,
        pwd : req.body.pwd
    })
    newLoginInfo.save()
})

// Get All login
router.get('/getAllLogin',async(req,res)=>{
    const result = await loginInfo.find()
    res.json(result)
})

// Get One login
router.get('/getOneLogin/:id',async(req,res)=>{
    const result = await loginInfo.findById(req.params.id)
    res.json(result)
})

// Patch One login
router.patch('/updateOneLogin/:id',async(req,res)=>{
    const result = await loginInfo.findByIdAndUpdate(req.params.id,{
        name : req.body.name,
        email : req.body.email,
        pwd : req.body.pwd,
        last_login : Date.now
    })
    res.json(result)
})

// Delete One login
router.delete('/deleteOneLogin/:id',async(req,res)=>{
    const result = await loginInfo.findByIdAndDelete(req.params.id)
    res.json(result)
})

// Check Login
router.post('/checkLogin',async(req,res)=>{
    const result = await loginInfo.find({
        "$and" : [
            {email : req.body.email},
            {pwd : req.body.pwd}
        ]
    })
    if(result){
        res.json(result)
    }
    else{
        res.send("No Record Matched")
    }
})

module.exports = router