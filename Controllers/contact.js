const DB = require("../db");


const getquery = async (req, res) => {
  try {
    const userid = req.body.email;
    const query = req.body.query;
    DB.query(`insert into queries (user_email,query) values ('${userid}', '${query}')`, (error, result) => {
      if (error) {
        res.status(400).json({
          error: true,
          message: "database error",
        });
      } else {
       
          res.status(200).json({
            error: false,
            message: "Your query has been submitted, we will resolve your query as soon as possible", // Return null if no restaurant found
          });
      }
    });

  } catch (error) {
    res.status(404).json({
      error: true,
      message: "server error"
    })
  }
}

module.exports = getquery;