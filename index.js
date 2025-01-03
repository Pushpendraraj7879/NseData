const express = require("express");
const { nseData } = require("nse-data");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/nseData", (req, res) => {
  nseData.marketStatus().then((value) => { res.status(200).json(value);}).catch((error)=>{ res.status(500).json(error)});
});

app.listen(PORT, (req, res) => {
  console.log(`Sever is running on ${PORT}`);
});
