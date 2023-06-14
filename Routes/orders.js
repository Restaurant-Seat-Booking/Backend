const express = require("express");
const orderRoutes = express.Router();

const getorders = require("../Controllers/order")

orderRoutes.post("/order",getorders);


module.exports = orderRoutes;