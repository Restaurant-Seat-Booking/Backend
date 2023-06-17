const express = require("express");
const reviewRoutes = express.Router();


const getreview = require("../Controllers/Restaurant/reviews");

reviewRoutes.post("/review",getreview);


module.exports = reviewRoutes;