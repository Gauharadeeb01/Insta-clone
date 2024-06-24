const express=require('express');
const router=express.Router()

router.get('./',(req,res)=>{
    res.send("hello");
})


router.post("/signUp",(req,res)=>{
    res.json("data posted successfully")
})
module.exports=router;