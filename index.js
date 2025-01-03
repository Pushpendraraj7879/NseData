const express=require("express")
const { nseData } =require('nse-data');
const app=express()
const PORT=process.env.PORT || 3000
const data=[]
app.get('/nseData',(req,res)=>{
    nseData.marketStatus().then((value) => {
        data=value
    })
    res.status(200).json(value)
})





app.listen(PORT,(req,res)=>{
    console.log(`Sever is running on ${PORT}` )
})
