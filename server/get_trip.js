const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

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
    const { name, companyName, email, selectedCountry, phone, mtow, port, purpose, permits, groundHandling, fueling, catering, crewPassengerService, hotelReservation, other, otherDetails } = req.body;

    let emailText = `Name: ${name}\nCompanyName: ${companyName}\nEmail: ${email}\nSelectedCountry: ${selectedCountry}\nphone: ${phone}\nmtow: ${mtow}\nport: ${port}\npurpose: ${purpose}\n`;

    if (permits) emailText += "Service: Permits\n";
    if (groundHandling) emailText += "Service: Ground Handling\n";
    if (fueling) emailText += "Service: Fueling\n";
    if (catering) emailText += "Service: Catering\n";
    if (crewPassengerService) emailText += "Service: Crew & Passenger Service\n";
    if (hotelReservation) emailText += "Service: Hotel Reservation & Transportation\n";

    if (other) {
        emailText += `Other Details: ${otherDetails}\n`;
    }

    const mailOptions = {
        from: "codehub.apps@gmail.com",
        to: "codehub.apps@gmail.com",
        subject: "Get Trip Cost Estimate Form Submission",
        text: emailText
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error occurred, email not sent.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully!');
        }
    }

    )
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
