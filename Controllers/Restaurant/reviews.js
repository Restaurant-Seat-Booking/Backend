const DB = require("../../db");
const bodyParser = require('body-parser');

const getreview = async (req, res) => {
  try {
    const email = req.body.email;
    const restaurantid = req.body.restaurantid;
    // console.log(email)
    DB.query(`SELECT * FROM reviews WHERE restaurant_id = '${restaurantid}'`, (error, result) => {
      if (error) {
        res.status(400).json({
          error: true,
          message: "database error",
        });
      } else {
        if (result.length > 0) {
          const review = result[0];// Access the first item in the result array
          res.status(200).json({
            error: false,
            data: review,
          });
        } else {
          res.status(200).json({
            error: false,
            data: null, // Return null if no restaurant found
          });
        }
      }
    });

} catch (error) {
  res.status(404).json({
    error: true,
    message: "server error"
  })
}
};

const getuser = async (req, res) => {
    try {
      const email = req.body.email;
    //   const restaurantid = req.body.restaurantid;
      // console.log(email)
      DB.query(`SELECT * FROM users WHERE user_email = '${email}'`, (error, result) => {
        if (error) {
          res.status(400).json({
            error: true,
            message: "database error",
          });
        } else {
          if (result.length > 0) {
            const user = result[0];// Access the first item in the result array
            res.status(200).json({
              error: false,
              data: user,
            });
          } else {
            res.status(200).json({
              error: false,
              data: null, // Return null if no restaurant found
            });
          }
        }
      });
  
  } catch (error) {
    res.status(404).json({
      error: true,
      message: "server error"
    })
  }
  };


const getreviewpost = async (req, res) => {
    try {
      const restaurantid = req.body.restaurantid;
      const review = JSON.stringify(req.body.review);
    //   console.log(restaurantid);
    //   console.log(review);
  
      DB.query(
        `UPDATE reviews
        SET review = '${review}'
        WHERE restaurant_id = '${restaurantid}';`,
        (error, result) => {
          if (error) {
            res.status(400).json({
              error: true,
              message: "database error",
            });
          } else {
            res.status(200).json({
              error: false,
              message: "updated successfully",
            });
          }
        }
      );
    } catch (error) {
      res.status(404).json({
        error: true,
        message: "server error",
      });
    }
  };

module.exports = {getreview,getuser,getreviewpost};