const nodemailer = require('nodemailer');

// Create a transporter with Gmail service
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'codehub.apps@gmail.com',
    pass: 'zecyvwvfwzojbadw'
  }
});

// Function to send email
async function sendMail(formData) {
  const { firstName, lastName, email, phoneNumber, subject, message } = formData;

  // Construct email options
  const mailOptions = {
    from: 'codehub.apps@gmail.com',
    to: 'codehub.apps@gmail.com',
    subject: subject,
    text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\n\nMessage: ${message}`
  };

  // Send email
  await transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
