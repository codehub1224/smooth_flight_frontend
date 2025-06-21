const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: 'codehub.apps@gmail.com',
        pass: 'zecyvwvfwzojbadw'
    }
});


app.post('/send-email', (req, res) => {
    const { name, email, service, subject, message } = req.body;
    const mailOptions = {
        from: "codehub.apps@gmail.com",
        to: "codehub.apps@gmail.com",
        subject: "Request a Quick Quote Form Submission",
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nSubject: ${subject}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error occurred, email not sent.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully!');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;


