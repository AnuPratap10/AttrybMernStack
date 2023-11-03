
const express= require("express")

const app= express()

app.get('/',function(req,res){
    res.send("backend are working")
})

app.listen(7000,()=>{
    console.log("listen to port 7000")
})