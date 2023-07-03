const DB = require("../db");
const { instance } = require("../payment");
const getorders = async(req,res)=>{
    try {
        const email = req.body.email;
        // console.log(email)
        DB.query(`select * from orders where user_email = '${email}'`, (error, result)=>{
            // console.log(e)
            if(error){
                res.status(400).json({
                    error : true,
                    message : "database error",
                })
            }else{
                res.status(200).json({
                    error : false,
                    data : result
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

const placeOrder = async(req, res)=>{
  try {
    // console.log(req.body);
    let amount = req.body.totalAmount;
    amount  = amount*100;
    var options = {
      amount: amount,  // amount in the smallest currency unit
      currency: "INR",
      receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function(err, order) {
      if(err){
          return res.status(500).json({
            err
          });
        }
          return res.status(200).json({order});
    })

  } catch (error) {
   return res.status(200).json({
      error : true,
      message : "server error"
    })
  }
}


module.exports = {getorders,placeOrder};