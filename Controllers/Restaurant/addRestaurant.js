const DB = require("../../db");

const addRestaurant = async(req,res)=>{
    try {
        console.log(req.body.restaurantData)
    } catch (error) {
        res.status(404).json({
            error : true,
            message : "server error"
        })
    }
}

module.exports  = addRestaurant;