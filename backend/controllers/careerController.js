const career = require('../models/career');

exports.createCareer = async (req, res) => {
    try {
        const data = await career.create(req.body);

        res.status(201).json({
            success: true,
            message: 'Career form submitted',
            data
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.getCareers = async (req, res) => {
    const data = await career.find().sort({ createdAt: -1 });
    res.json(data);
};