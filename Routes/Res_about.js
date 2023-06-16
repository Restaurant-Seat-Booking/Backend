const express = require("express");
const aboutRoutes = express.Router();

const {getabout,getaboutupdate,getfeatureupdate} = require("../Controllers/Restaurant/About");

aboutRoutes.post("/about",getabout);
aboutRoutes.post("/aboutupdate",getaboutupdate);
aboutRoutes.post("/featureupdate",getfeatureupdate);


module.exports = aboutRoutes;