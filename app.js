const express=require("express");
const morgan=require("morgan");

const app=express();
app.use(morgan('dev'));

app.get("/",(req,res)=>{
    for (let i =0;i<100000000;i++){

    }
    res.send("hellowww");
});
app.get("/stress-test",(req,res)=>{
    for (let i =0;i<10000000;i++){
        
    }
    res.send("hellowww");
});
app.listen(3000,()=>{
    console.log("Server is running!");
})