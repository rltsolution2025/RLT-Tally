const register = require('../models/register');

exports.createRegister = async (req, res) => {
    try {
        const data = await register.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Registration Successful',
            data
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getRegisters = async (req, res) => {
    const data = await register.find().sort({ createdAt: -1 });
    res.json(data);
};