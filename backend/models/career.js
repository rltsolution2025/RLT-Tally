const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('career', careerSchema);