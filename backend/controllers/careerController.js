const Career = require('../models/career');

// Create Career
exports.createCareer = async (req, res) => {
  try {
    const start = Date.now();

    const data = await Career.create(req.body);

    console.log(`Career saved in ${Date.now() - start}ms`);

    res.status(201).json({
      success: true,
      message: 'Career form submitted successfully',
      data
    });
  } catch (error) {
    console.error('Create Career Error:', error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Get All Careers
exports.getCareers = async (req, res) => {
  try {
    const data = await Career.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: data.length,
      data
    });
  } catch (error) {
    console.error('Get Careers Error:', error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};