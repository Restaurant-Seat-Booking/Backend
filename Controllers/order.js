const DB = require("../db");


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



module.exports = getorders;