const DB = require("../db");

const getprofile = async(req,res)=>{
    try {
        const email = req.body.emailid;
        let data1;
        let data2;
        console.log(email)
        DB.query(`SELECT COUNT(order_id) AS count_value, SUM(total_spent) AS sum_value FROM orders
        where user_email = '${email}'`, (error, result)=>{
            // console.log(e)
            if(error){
                res.status(400).json({
                    error : true,
                    message : "database error",
                })
            }else{
                data1=result
            }
        })
        DB.query(`select user_name,phone_number from users where user_email = '${email}'`, (error, result)=>{
            // console.log(e)
            if(error){
                res.status(400).json({
                    error : true,
                    message : "database error",
                })
            }else{
                data2=result
            }
        })
        res.status(201).json({
            error : false,
            data1 : data1,
            data2
        })
        console.log(data1)
        console.log(data2)
    } catch (error) {
        res.status(404).json({
            error : true,
            message : "server error"
        })
    }
}



module.exports = getprofile;