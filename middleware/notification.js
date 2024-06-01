const nodemailer = require('nodemailer');

const createTransporter = (email, password) => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: email,
      pass: password
    }
  });
};

const sendNotification = async (email, password, to, subject, text) => {
  if (!email || !password || !to || !subject || !text) {
    throw new Error('Missing required fields');
  }

  const transporter = createTransporter(email, password);

  const mailOptions = {
    from: email,
    to,
    subject,
    text
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

module.exports = sendNotification;
  