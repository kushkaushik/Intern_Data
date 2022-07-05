const express =require('express');
const tok  =require('jsonwebtoken')
const route = express();
const mongoose = require('mongoose')
const USERDATA =mongoose.model('internUser')
const bcrypt = require('bcrypt')
const {seckey}  = require('../db')

route.post('/signin',(req,res)=>{
    const {name , email  , password} = req.body;
    if(!name || !email || !password){
        res.json({error:"Please fill the records"});
    }


    else{
        USERDATA.findOne({email}).then(mydata=>{
        if(mydata)
        {
         return res.json({error:"User is already present"});
        }

        bcrypt.hash(password,12).then(hashpassword=>{
            const temp =new USERDATA({
                name , email , password:hashpassword
            });
            temp.save().then(datahere=>{
                return res.json({message:"Data Saved Sucesfully"})
            })
        })
       
       
    })
}
})




route.post('/signup',(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password) {
        return res.json({error:"Please fill all the records"})
    }
    else{
        USERDATA.findOne({email}).then(mydata=>{
            if(!mydata){
                return res.json({error:"Wrong data entered"});
            }
            else{

                bcrypt.compare(password,mydata.password).then(data=>{
                    if(data){
                        const token = tok.sign({_id:mydata._id},seckey);
                        const {_id , name , email , password}  = mydata
                        return res.json({token,user:{_id, name , email , password}});
                    }else{
                        res.json({error:"Wrong data entered"});
                        
                    }
                })
            }
        })
    }

})










module.exports = route