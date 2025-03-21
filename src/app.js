
console.log('this is new tinder development');

const express=require('express');
const app=express();



app.get("/test",(req,res)=>{
res.send({firstname:'praveen',designation:"ceo"});
})

app.use("/test",(req,res)=>{
    res.end('iam the test path');
})


app.use("/inner",(req,res)=>{
    res.end('iam the inner path');
})

// order of routing matters






app.listen(3000,()=>{
    console.log('the server is running on port 3000')
})




