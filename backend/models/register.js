const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    course: String,
    college: String,
    state: String,
    district: String,
    qualification: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('register', registerSchema);