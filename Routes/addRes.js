const express = require("express");
const addResRoutes = express.Router();

const addRestaurant = require("../Controllers/Restaurant/addRestaurant")


addResRoutes.post("/addRes",addRestaurant);


module.exports = addResRoutes;