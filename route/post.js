const express = require('express');
const mongoose = require('mongoose')
const route = express.Router();
const USER = mongoose.model("user")
const loginmid = require('../loginmid')

route.post('/posting',loginmid,(req,res)=>{
    const {userId, title , body} = req.body;
    if(!title || !body){
        return res.json({error:"Please fill all the fields"})
    }

   
   
  
    const temp = new USER({
       userId, title , body ,postedBy:req.user
    });
    

    temp.save().then(data=>{
        // res.json({message:"Data Saved Successfully"});
        res.json({mydata:data})
    }).catch(err=>{
        res.json({error:err})
    })



})


route.get('/getData',loginmid,(req,res)=>{
    USER.find({}).then(data=>{
        res.json({mydata:data});
    })
})


route.get('/view/:_id',loginmid,(req,res)=>{
        USER.findById(req.params._id).populate("postedBy","name email").then(data=>{
            postedBy = req.user
            res.json({data:data,post:postedBy})
        })
})






module.exports = route;