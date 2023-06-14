const express = require("express");
const { login , signUp } = require("../Controllers/loginAndSignup");

const routers = express.Router();

routers.get("/login",login);
routers.post("/signUp", signUp);

module.exports = routers;