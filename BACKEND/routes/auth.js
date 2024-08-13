// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const Principal = express.Router();

// Register Principal on First App Start
Principal.post('/init', async (req, res) => {
    const email = 'principal@classroom.com';
    const password = 'Admin';

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'Principal already exists' });
        }

        user = new User({
            email,
            password: await bcrypt.hash(password, 10),
            role: 'Principal',
        });

        await user.save();

        res.send('Principal account created');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Register User (Teacher or Student)
Principal.post('/register', async (req, res) => {
    const { email, password, role } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            email,
            password: await bcrypt.hash(password, 10),
            role,
        });

        await user.save();

        res.send('User registered');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login User
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        };

        jwt.sign(
            payload,
            'your_jwt_secret', // Use a better secret in a real app
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = Principal;
