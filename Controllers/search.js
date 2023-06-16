const DB = require("../db");

const getRestaurantByName = async (req, res) => {
    try {

    } catch (error) {

    }
}

const getRestaurantByLocation = async (req, res) => {
    const latitude = req.body.latiude;
    const longitude = req.body.longitude;
    const radius = 20;
    console.log({latitude,longitude});
    try {
        const qery = `
        SELECT restaurant_name, latiude, longitude,
          (6371 * acos(cos(radians(${latitude})) * cos(radians(latiude)) * cos(radians(longitude) - radians(${longitude})) + sin(radians(${latitude})) * sin(radians(latiude))))
          AS distance
        FROM restaurant
        HAVING distance < ${radius}
        ORDER BY distance;
      `;
        
        DB.query(qery, (error, result) => {
            console.log("ok")
            if (error) {
                res.status(400).json({
                    error: true,
                    message: "database error",
                })
            } else {
                console.log(result);
                res.status(200).json({
                    error: false,
                    data: result
                })
            }
        })
        
    } catch (error) {
        res.status(404).json({
            error: true,
            message: "server error",
            err : error
        })
    }
};

module.exports = { getRestaurantByName, getRestaurantByLocation }