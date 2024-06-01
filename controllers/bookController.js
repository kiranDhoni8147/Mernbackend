const BookNow = require("../models/BookNow");
// const sendNotification = require("./path/to/your/module");

// @desc    Create a user
// @route   POST /api/users
// @access  Public
const bookuser = async (req, res) => {
  const { name, phone, email, address, brand, model, termsAgreed, service } =
    req.body;

 /*  const emailData = "youremail@gmail.com";
  const password = "yourpassword";
  const to = "recipientemail@example.com";
  const subject = "Test Subject";
  const text = "Test email body text";
 */
  try {
    let existingUser = await BookNow.findOne({
      name,
      phone,
      email,
      address,
      brand,
      model,
      termsAgreed,
      service,
    });

    if (existingUser) {
      return res
        .status(200)
        .json({ msg: "User with the same data already exists" });
    }

    let bookNow = new BookNow({
      name,
      phone,
      email,
      address,
      brand,
      model,
      termsAgreed,
      service,
    });

    await bookNow.save();
    /* sendNotification(emailData, password, email, subject, text)
      .then(() => console.log("Notification sent successfully"))
      .catch((err) => console.error("Error sending notification:", err)); */
    res.status(200).json({ msg: "Form Data Saved Successfully." });
  } catch (err) {
    console.error(err.message);
    if (!res.headersSent) {
      res.status(500).json({ msg: "Server Error" });
    }
  }
};

module.exports = {
  bookuser,
};
