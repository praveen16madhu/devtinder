const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true

    },

    lastName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
    }
})


const UserModel=mongoose.model('user',userSchema);

module.exports=UserModel;

