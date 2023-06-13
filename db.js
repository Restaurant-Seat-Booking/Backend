const mysql = require('mysql');

const con = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12625954",
    password: "lNZwT2ExDA",
    database: "sql12625954"
  });

  con.connect(function(err) {
    if (err) console.log(err) ;
    else console.log("Connected!");

  });