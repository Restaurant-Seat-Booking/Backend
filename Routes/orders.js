const express = require("express");
const orderRoutes = express.Router();

const {getorders, placeOrder} = require("../Controllers/order")


orderRoutes.post("/order",getorders);
orderRoutes.post("/placeorder",placeOrder);



module.exports = orderRoutes;