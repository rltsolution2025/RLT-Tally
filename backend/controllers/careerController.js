const career = require('../models/career');

exports.createCareer = async (req, res) => {
  try {
    const start = Date.now();

    const data = await career.create(req.body);

    console.log(`Career saved in ${Date.now() - start}ms`);

    res.status(201).json({
      success: true,
      message: 'Career form submitted',
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
