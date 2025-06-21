//api/send-email.js
const express = require('express');
const router = express.Router();
const { sendMail } = require('../utils/mailer');

router.post('/', async (req, res) => {
  try {
    const formData = req.body;

    // Set CORS headers
    res.header('Access-Control-Allow-Origin', 'https://api-smoothfs.codehubdigital.com/');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    // Send the email with form data
    await sendMail(formData);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error handling form submission:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;



