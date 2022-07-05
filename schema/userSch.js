const mongoose=  require('mongoose')
const {ObjectId}  = mongoose.Types
const newSch = new mongoose.Schema({
   
    userId:{
        type:Number
    },

    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    postedBy:{
        type:ObjectId,
        ref:"internUser"
    }
})


mongoose.model("user",newSch)