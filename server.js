// server.js
require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 
console.log(`I'am ${process.env.MY_NAME}. I live in ${process.env.MY_CITY}. And I love ${process.env.MY_LANGUAGE}`)