const express = require('express');
const Principal = express.Router();

Principal.use(express.json());

<<<<<<< HEAD
Principal.post("/login", async (req, res) => {
    try {
        const body = req.body;

        const newdata = new P1(body);

        const response = await newdata.save();
        console.log("data is saved");
        res.status(200).json(response);

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "internal server error" });
    }
})

module.exports = Principal;    
=======
Principal.post("/login", (req, res) => {
    const body = req.body;
})
module.exports=Principal;
>>>>>>> addf990ed21399367b5d4232ada8c033e78dfc8f
