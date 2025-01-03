const express = require("express");
const { nseData } = require("nse-data");
const app = express();
const PORT = process.env.PORT || 3000;

// app.get("/nseData", (req, res) => {
//     console.log("Received request for /nseData");
//     nseData
//       .marketStatus()
//       .then((value) => {
//         console.log("Data fetched successfully", typeof value);
//         res.status(200).json(value);
//       })
//       .catch((error) => {
//         console.error("Error fetching data", error);
//         res.status(500).json(error);
//       });
//   });

app.get('/nseData',(req,res)=>{
    const fetchData=async()=>{
        try{
            const response=await fetch("https://www.nseindia.com/api/marketStatus")
            if(!response){
                throw new Error("fetching failed")
            }
            const result=await response.json()
            // console.log("data",result)
            res.status(200).json(result)
        }catch(error){
        // console.log("error",error.message)
        res.status(500).json(error)
        }
    }
    fetchData()
})
  

app.listen(PORT, (req, res) => {
  console.log(`Sever is running on ${PORT}`);
});
