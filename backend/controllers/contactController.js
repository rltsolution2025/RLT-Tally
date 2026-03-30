const contact = require('../models/contact');

exports.createContact = async (req, res) => {
    try {
        const data = await contact.create(req.body);
        res.status(201).json({
            success: true,
            message: 'Contact form submitted',
            data
        });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

exports.getContacts = async (req, res) => {
    const data = await contact.find().sort({ createdAt: -1 });
    res.json(data);
};