const express = require("express");
const profileRoutes = express.Router();

const getprofile = require("../Controllers/profile")

profileRoutes.post("/profile",getprofile);


module.exports = profileRoutes;