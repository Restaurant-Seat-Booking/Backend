const mysql  = require("mysql")

const pool = mysql.createConnection({
    host : "sql12.freesqldatabase.com",
    user: "sql12625954",
    password : "lNZwT2ExDA",
    database : "sql12625954",
})

pool.connect((err)=>{
    if(err) console.log(err);
    else console.log("connected");
})