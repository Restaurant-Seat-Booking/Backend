require('dotenv').config()
const mysql = require('mysql2')
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
module.exports = connection






// const { json } = require("body-parser");
// const mysql = require("mysql");

// const pool = mysql.createPool({
//   connectionLimit: 10, // Maximum number of connections in the pool
//   host: "sql12.freesqldatabase.com",
//   user: "sql12625954",
//   password: "lNZwT2ExDA",
//   database: "sql12625954",
// });

// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error("Error connecting to the database:", err);
//     return;
//   }
//   console.log("Connected to the database");

  


//   // let sql = `update restaurant set restaurant_id =12 where restaurant_name = "LLRKharagpur";`
//   // let sql = `create table reviews(
//   //   restaurant_id int primary key,
//   //   review varchar(2000)
//   // );`

//   // const review = [
//   //   {
//   //     author: 'John Doe',
//   //     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac turpis non dolor dignissim accumsan. Nulla facilisi. Sed euismod justo vel aliquet finibus.',
//   //   },
//   //   {
//   //     author: 'Jane Smith',
//   //     review: 'Suspendisse potenti. In iaculis nulla in metus commodo, sit amet congue leo blandit. Sed a felis gravida, mattis nisi eget, venenatis erat.',
//   //   },
//   //   {
//   //     author: 'David Johnson',
//   //     review: 'Curabitur ac ligula nec lorem efficitur vulputate. Integer vitae ultrices mauris. Aliquam sodales ipsum ut malesuada pellentesque.',
//   //   },
//   // ];

//   // const jsonreview = JSON.stringify(review);
//   // let sql =`insert into reviews (restaurant_id,review) values (3,'${jsonreview}');`


//   // const av = [{
//   //   '10:00 AM': 0,
//   //   '12:00 PM': 12,
//   //   '2:00 PM': 13,
//   //   '4:00 PM': 14
//   // }];

//   // const feat = [
//   //   {
//   //     icon: 'fa fa-motorcycle fa-4x',
//   //     title: 'Home Delivery',
//   //     description: 'Enjoy the convenience of home delivery service.',
//   //   },
//   //   {
//   //     icon: 'fa fa-smoking fa-4x',
//   //     title: 'Smoking Area',
//   //     description: 'Designated smoking area available for smokers.',
//   //   },
//   //   {
//   //     icon: 'fa fa-snowflake fa-4x',
//   //     title: 'Air Condition',
//   //     description: 'Relax and dine in a comfortable air-conditioned environment.',
//   //   }
//   // ];

//   // const itm = [
//   //   {
//   //     name: 'Chicken Masala',
//   //     price: 12,
//   //     ingredients: ['Chicken', 'Masala', 'Onions', 'Tomatoes'],
//   //   },
//   //   {
//   //     name: 'Butter Paneer',
//   //     price: 10,
//   //     ingredients: ['Paneer', 'Butter', 'Cream', 'Spices'],
//   //   },
//   //   {
//   //     name: 'Pasta Alfredo',
//   //     price: 14,
//   //     ingredients: ['Pasta', 'Alfredo Sauce', 'Garlic', 'Parmesan'],
//   //   }
//   // ];

//   // const img = [
//   //   { url: './images/food1.jpg', alt: 'Image 1' },
//   //   { url: './images/food2.jpg', alt: 'Image 2' },
//   //   { url: './images/food3.jpg', alt: 'Image 3' },
//   // ];

//   // const jsonav = JSON.stringify(av);
//   // const jsonfeat = JSON.stringify(feat);
//   // const jsonitm = JSON.stringify(itm);
//   // const jsonimg = JSON.stringify(img);

//   // let sql = `INSERT INTO restaurant (restaurant_name, opening_time, closing_time, available_seats, address, latiude, longitude, about_us, features, items, image)
//   // VALUES ('LLRKharagpur', '10:40AM', '08:30PM', '${jsonav}', 'nehru hall of residence', 22.3214, 87.3028, 'bohot bahiyaad hotel', '${jsonfeat}', '${jsonitm}', '${jsonimg}');
//   // `


//   // let sql = `UPDATE restaurant
//   //          SET features = '${jsonfeat}'
//   //          WHERE restaurant_id = 3;
//   //         `;



//   // let sql = `CREATE TABLE restaurant (
//   //   restaurant_id INT AUTO_INCREMENT PRIMARY KEY,
//   //   restaurant_name VARCHAR(50),
//   //   opening_time TIME,
//   //   closing_time TIME,
//   //   available_seats VARCHAR(80),
//   //   address VARCHAR(80),
//   //   longitude DECIMAL(10,4),
//   //   latitude DECIMAL(10,4),
//   //   about_us VARCHAR(300),
//   //   features VARCHAR(500),
//   //   items VARCHAR(1000),
//   //   image VARCHAR(1000)
//   // );`

//   // let items = ["roti","sabji"]
//   // const jsonString = JSON.stringify(items);
//   // let sql=`INSERT INTO orders (date, restaurant_name, location, total_spent, user_email, restaurant_id, items) 
//   // VALUES ('2023-06-14 7:14PM', 'apna Restaurant', 'ramgard', 40, 'vedprakash@gmail.com', 3, '${jsonString}');
//   // `

//   // pool.query(sql,(err)=>{
//   //   if(err) throw err
//   //   console.log("Inserted into Table")
//   // })

//   connection.release(); // Release the connection back to the pool
// });

// module.exports = pool
