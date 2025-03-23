const dataBaseConnection=require("./config/database.js")

console.log('this is new tinder development');

const express=require('express');
const User=require('./models/user');

const app=express();


dataBaseConnection().
then((data)=>{
console.log('the daatbaseconnection is established in correct way');

  app.listen(3000,()=>{
    console.log('the server listening of the 3000 port');
  })

})
.catch((err)=>{
console.error('the connection is failed')
})


app.use(express.json());


app.post('/user',(req,res)=>{
 
   console.log(req.body)

   const newUser=User(req.body);

    newUser.save().then(()=>{
        console.log('the user created sucessfully');
        res.send('the user added sucessfully');
    })
    .catch((error)=>{
       console.error('the is error in this',error._message);
       res.status(501).send('failed to add the user');
    })
})



/*app.get('/user',async (req,res)=>{

    try{
    const searchedUser=await User.find({firstName:"telidu"});

    if(searchingUser.length===0){
        throw new Error('non one is fount with taht name in database');
    }
    else{
        res.status(200).send(searchedUser);
    }
}
 catch(error){
    res.status(404).json({message:error.message});
 }

})
 */

app.use("/admin",(req,res,next,err)=>{
    let key="praveeen";

    if(key==="praveen"){
        res.end("sucessfully authenticated");
    }
    else{
        next();
    }

    
})
app.use('/mike',(req,res,next)=>{
console.log('love');
})


app.use("/test",(req,res)=>{
    next();
})

app.use('/',(req,res,next)=>{
res.status(200).end('there is some fishy');
})

// order of routing matters
