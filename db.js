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

  // Perform database operations here

  connection.release(); // Release the connection back to the pool
});
