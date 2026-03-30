const mongoose = require('mongoose');

const enrollSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    message: String,
    course: String
}, { timestamps: true });

module.exports = mongoose.model('Enroll', enrollSchema,'enrollForm');
