// const { Schema } = mongoose;
const mongoose = require('mongoose');
// import mongoose from 'mongoose';

// define the person schema...
const principalSchema = new mongoose.Schema(
   {
      name: {
         type: String,
         required: true
      },
      email: {
         type: String,
         required: true,
         unique: true

      },
      password:{
         type : String,
         required:true
      }
   })

//create person model
const P1 = mongoose.model('P1', principalSchema);
module.exports = P1;