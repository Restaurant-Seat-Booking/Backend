const express = require("express");
const aboutRoutes = express.Router();

const {getabout,getaboutupdate} = require("../Controllers/Restaurant/About");

aboutRoutes.post("/about",getabout);
aboutRoutes.post("/aboutupdate",getaboutupdate);


module.exports = aboutRoutes;