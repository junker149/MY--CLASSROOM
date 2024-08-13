const express = require('express');
const app = express();

const C1 = require('./usertype/classroom'); 
const P1 = require('./usertype/User'); 
// const T1 = require('./usertype/Teacher'); 

const PORT= process.env.PORT || 3000;

app.listen(PORT,() =>{
  console.log("listening to port number");
});