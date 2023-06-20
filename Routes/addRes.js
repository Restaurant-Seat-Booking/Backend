const express = require("express");
const addResRoutes = express.Router();

const addRestaurant = require("../Controllers/Restaurant/addRestaurant")
const isAdded = require("../Controllers/Restaurant/addRestaurant")


addResRoutes.post("/addRes",addRestaurant);
addResRoutes.post("/isAdded",isAdded);


module.exports = addResRoutes;