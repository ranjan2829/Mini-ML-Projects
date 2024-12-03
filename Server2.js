const express=require("express");
const morgan=require("morgan");
const app=express();

app.use(morgan('dev'));
app.get('/',(req,res)=>{
    for(let i=0;i<100000000;i++){

    }
    res.send("hi from server 2.0!");
});
app.listen(3001,()=>{
    console.log("Server stress service running on 3002 done !")
})


