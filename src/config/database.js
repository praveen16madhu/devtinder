const mongoose = require("mongoose");
const uri = "mongodb+srv://praveenpulluru75:OyBrhU7xospm9Z8x@cluster10.7vfa4.mongodb.net/devTinder?retryWrites=true&w=majority";


async function connectToDatabase() {
   await mongoose.connect(uri,{
      tls: true,
      serverSelectionTimeoutMS: 3000,
      autoSelectFamily: false,
    });
   

    
}
module.exports=connectToDatabase;
