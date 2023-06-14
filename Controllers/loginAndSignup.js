const DB = require("../db")

const login = async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        DB.query(`select * from users where user_email = '${email}'`,(err,result)=>{
            console.log(result)
            if (result && result.length > 0) {
                const databasePassword = result[0].user_password;
                if(password==databasePassword){
                    res.status(200).json({
                        error : false,
                        data : result
                    })
                }else{
                    res.status(401).json({
                        error : true,
                        message : "Invalid Login credentials"
                    })
                }
            }else {
                res.json({ 
                    error : true ,
                    message: "No data found." 
                });
            }
        })

    } catch (error) {
        res.Status(404).json({message : "server error"});
    }
}

const signUp = async (req,res)=>{
    try {
        const userName = req.body.name;
        const userEmail = req.body.email;
        const userPassword = req.body.password;
        const userPhone = req.body.phone;
        console.log(req.body)

        const query = `INSERT INTO users (user_email,user_name, user_password, phone_number) VALUES 
                                        ('${userEmail}', '${userName}','${userPassword}','${userPhone}')`;

        DB.query(query, (err, result) => {
        if (err) {
            // Check if it's a duplicate key error
            if (err.code === "ER_DUP_ENTRY") {
                res.status(400).json({ 
                    error : true,
                    message: "User already exist" 
                });
            } else {
                // Handle other database errors
                res.status(500).json({ 
                    error : true,
                    err : err,
                    message: "Database error" 
                });
            }
            return;
        }
            // User record created successfully
            res.status(201).json({ 
                error : false,
                message: "User created" 
            });
        });
    } catch (error) {
        res.status(404).json({
            error : true,
            message : "server error"
        })
    }
}


module.exports = {login, signUp}