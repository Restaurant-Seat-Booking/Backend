const DB = require("../../db");


const getabout = async(req,res)=>{
    try {
        const email = req.body.email;
        const restaurantid =3;
        // console.log(email)
        DB.query(`SELECT * FROM restaurant WHERE restaurant_id = '${restaurantid}'`, (error, result) => {
            if (error) {
              res.status(400).json({
                error: true,
                message: "database error",
              });
            } else {
              if (result.length > 0) {
                const restaurant = result[0];// Access the first item in the result array
                res.status(200).json({
                  error: false,
                  data: restaurant,
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
            error : true,
            message : "server error"
        })
    }
}


const getaboutupdate = async(req,res)=>{

  try {
      const aboutus = req.body;
      // const jsonaboutus = JSON.stringify(aboutus)
      console.log(aboutus);
      
      DB.query(`UPDATE restaurant
      SET about_us = '${aboutus}'
      WHERE restaurant_id = 3;
      `, (error, result)=>{
          // console.log(e)
          if(error){
              res.status(400).json({
                  error : true,
                  message : "database error",
              })
          }else{
              res.status(200).json({
                  error : false,
                  message : "updated successfully"
              })
          }
      })
  } catch (error) {
      res.status(404).json({
          error : true,
          message : "server error"
      })
  }
}
module.exports = {getabout,getaboutupdate};