const express = require("express");
const bodyParse = require("body-parser")
const app = express();
const pool =require("./db")
const PORT  = 7000 | process.env.PORT


app.use(express.json())
app.use(bodyParse.urlencoded({
    extended:true
}))
const userLogin = require("./Routes/userLoginAndSignup");

app.use("/api/userLogin",userLogin);

app.get("/", (req, res) => {
  // let sql1=`drop table users`;
  // let sql = `CREATE TABLE users (
  //   user_email VARCHAR(40) NOT NULL PRIMARY KEY,
  //   user_name VARCHAR(30) NOT NULL,
  //   user_password VARCHAR(30) NOT NULL,
  //   phone_number VARCHAR(15)
  // )`;

  pool.query(sql,(err,result)=>{
    if(err) {throw err};
    console.log("created users table")
  })
  
});


app.listen(PORT,(err)=>{
    if(err) throw err;
    console.log(`server is running at ${PORT}`)
})

