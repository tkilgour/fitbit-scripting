require('dotenv').config();
const request = require("request");

// FitBit Authorization – Please create a .env with the following two lines:
// FITBIT_USER = <Your Username>
// FITBIT_TOKEN = <Your Token>  ***Expires on FEB 16, 2017***
const FITBIT_USER = process.env.FITBIT_USER;
const FITBIT_TOKEN = process.env.FITBIT_TOKEN;

let options = {
  url: 'https://api.fitbit.com/1/user/-/profile.json',
  headers: {
    Authorization: `Bearer ${FITBIT_TOKEN}`
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);
    console.log(data);
  }
}

request(options, callback);
