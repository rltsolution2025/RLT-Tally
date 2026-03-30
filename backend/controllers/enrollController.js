const Enroll = require('../models/enroll');

// POST
exports.createEnroll = async (req, res) => {
    try {

        console.log("📥 Incoming Data:", req.body); // 🔥 ADD THIS

        const data = new Enroll(req.body);
        await data.save();

        console.log("✅ Saved Successfully");

        res.status(201).json({
            success: true,
            message: 'Enrollment Submitted',
            data
        });

    } catch (error) {
        console.log("❌ ERROR:", error.message); // 🔥 ADD THIS
        res.status(500).json({ error: error.message })
    }
};
exports.getEnrolls = async (req, res) => {
    const data = await Enroll.find().sort({ createdAt: -1 });
    res.json(data);
};