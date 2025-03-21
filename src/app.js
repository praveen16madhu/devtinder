
console.log('this is new tinder development');

const express=require('express');
const app=express();

app.use((req,res)=>{
    res.end('the result is  awesome');
})




app.listen(3000,()=>{
    console.log('the server is running on port 3000')
})




