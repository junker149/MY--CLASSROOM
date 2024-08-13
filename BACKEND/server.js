const express = require('express');
const app = express();

// const S1 = require('./usertype/Student'); 
const P1 = require('./usertype/Principal'); 
// const T1 = require('./usertype/Teacher'); 

const PORT= process.env.PORT || 3000;

app.listen(PORT,() =>{
  console.log("listening to port number");
});