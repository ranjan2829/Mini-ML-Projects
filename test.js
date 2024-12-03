const auto=require("autocannon");
const url='http://localhost:3000/';
const duration =30;
const instance=auto({
    url,duration
},(err,result)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log(result);

    }
});

auto.track(instance);