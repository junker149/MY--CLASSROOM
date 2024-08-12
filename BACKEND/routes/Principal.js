const express = require('express');
const Principal = express.Router();

Principal.use(express.json());

Principal.post("/login", (req, res) => {
    const body = req.body;
})
module.exports=Principal;
