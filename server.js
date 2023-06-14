const express = require("express");
const app = express();
const pool =require("./db")
const PORT  = 8000 | process.env.PORT

app.get("/",(req,res)=>{
   const data = pool.query("select * from users", (err,res)=>{
        if(err) throw err
    
      })
      res.json({data})
})

app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server is running at ${PORT}`)
})