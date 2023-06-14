const express = require("express");
const bodyParse = require("body-parser")
const app = express();
const pool =require("./db")
const PORT  = 7000 | process.env.PORT


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.use(express.json())
app.use(bodyParse.urlencoded({
    extended:true
}))
const userLogin = require("./Routes/userLoginAndSignup");

app.use("/api/userLogin",userLogin);




app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server is running at ${PORT}`)
})

