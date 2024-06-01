const Assistance = require("../models/GetQuickAssistance");

// @desc    Create a user
// @route   POST /api/getAssistence
// @access  Public
const assistenceUser = async (req, res) => {
  const { name, phone } = req.body;
  try {
    let existing = await Assistance.findOne({
      name,
      phone,
    });

    if (existing) {
      return res
       .status(200)
       .json({ msg: "User with the same data already exists" });
    }

    let assistance = new Assistance({
      name,
      phone,
    });

    await assistance.save();
    res.status(200).json({ msg: "Form Data Saved Successfully" });
  } catch (err) {
     console.error(err.message);
    if (!res.headersSent) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
};

module.exports = {
  assistenceUser
};