require('dotenv').config();
var request = require("request");

// FitBit Authorization – Please create a .env with the following two lines:
// FITBIT_USER = <Your Username>
// FITBIT_TOKEN = <Your Token>  ***Expires on FEB 16, 2017***
var FITBIT_USER = process.env.FITBIT_USER;
var FITBIT_TOKEN = process.env.FITBIT_TOKEN;