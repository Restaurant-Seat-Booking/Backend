const express = require("express");
const app = express();
const PORT  = 8000 | process.env.PORT


app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server is running at ${PORT}`)
})