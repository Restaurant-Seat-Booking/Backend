const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10, // Maximum number of connections in the pool
  host: "sql12.freesqldatabase.com",
  user: "sql12625954",
  password: "lNZwT2ExDA",
  database: "sql12625954",
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  
  console.log("Connected to the database");
  // let sql=`INSERT INTO orders (date, restaurant_name, location, total_spent, user_email, restaurant_id, items) 
  // VALUES ('2023-06-14 3:14PM', 'apna Restaurant', 'ramgard', 80, 'vedprakash@gmail.com', 3, 'bakre ka l**d');
  // `

  // pool.query(sql,(err)=>{
  //   if(err) throw err
  //   console.log("inseted into orders")
  // })

  connection.release(); // Release the connection back to the pool
});

module.exports = pool
