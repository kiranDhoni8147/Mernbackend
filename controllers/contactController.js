const ContactNow = require("../models/ContactNow");

// @desc    Create a user
// @route   POST /api/users
// @access  Public
const contactUser = async (req, res) => {
  
  const { car,name, phone, email, inquiryType, message } = req.body;

  try {
    let existingUser = await ContactNow.findOne({
      car,
      name,
      phone,
      email,
      inquiryType,
      message

    });

    if (existingUser) {
      return res
        .status(200)
        .json({ msg: "Contact with the same data already exists" });
    }

    let contactNow = new ContactNow({
      car,
      name,
      phone,
      email,
      inquiryType,
      message
    });

    await contactNow.save();
    res.status(200).json({ msg: "Contact Saved Successfully." });
  } catch (err) {
    console.error(err.message);
    if (!res.headersSent) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
};

module.exports = {
  contactUser,
};
