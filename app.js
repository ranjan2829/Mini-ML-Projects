const express=require("express");
const morgan=require("morgan");

const app=express();
app.use(morgan('dev'));

app.get("/",(req,res)=>{
    res.send("hellowww");
});
app.listen(3000,()=>{
    console.log("Server is running!");
})