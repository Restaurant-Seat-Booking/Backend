const express = require("express");
const aboutRoutes = express.Router();

const getabout = require("../Controllers/Restaurant/About");

aboutRoutes.post("/about",getabout);


module.exports = aboutRoutes;