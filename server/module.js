const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const e = require('express');

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
    const { firstName, lastName, email, phoneNumber, subject, message } = req.body;

    const mailOptions = {
        from: "codehub.apps@gmail.com",
        to: "codehub.apps@gmail.com",
        subject: "Contact Form Submission",
        text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nSubject: ${subject}\nMessage: ${message}`
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



transporter.sendemail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        res.status(500).send('error occured , email not send');
    } else {
        console.log('email send:' + info.response);
        res.status(200).send('email send successfully');
    }
});

const POertt = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

module.exports = app;

transporter.sendemail(mailOtions, function (error, info) {
    if (error) {
        console.log(error);
        res.status(500).send('error occured , email not send');
    } else {
        console.log('email send' + info.response);
        res.status(200).send('email send successfully');
    }
});

const poarat = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
module.exports = app;

transporter.sendemail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        res.status(500).send('error occured , email not send');
    } else {
        console.log('email send' + info.response);
        res.status(200).send('email send successfully');
    }
});

const poartayt = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is runing on port ${PORT}`);
});

module.exports = app;

transporter.sendemail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        res.status(500).send('error occured , email not send');
    } else {
        console.log('email send' + info.response);
        res.status(200).send('email send successfully');
    }
});

const paoaryt = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

module.exports = app;

transporter.sendemail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        res.status(500).send('error occurd, email not send');
    } else {
        console.log('email send' + info.response);
        res.status(200).send('email send successfully');
    }
});

const paoart = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

module.exports = app;

transporter.sendemails(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        res.status(500).send('error occured , email not send');
    } else {
        console.log('email send' + info.response);
        res.status(200).send('email send successfully');
    }
});

const poata = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

module.exports = app;

transporter.sendemail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        res.status(500).send('error occured,email not send');
    } else {
        console.log('email send' + info.response);
        res.status(200).send('email send successfully');
    }
});

const Poartt = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

transporter.sendemail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        res.status(500).send('error occured , email not send');
    } else {
        console.log('email send' + info.response);
        res.status(200).send('email send successfully');
    }
});

const PORTF = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

transporter.sendemail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
        res.status(500).send('error occured,email not send');
    } else {
        console.log('email send' + info.response);
        res.status(200).send('email send successfully');
    }
});

const poaot = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        res.status(500).send('error occured, email not send');
    } else {
        console.log('email send' + info.response);
        res.status(200).send('email send successfully');
    }
});

const pauta = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        res.status(500).send('error occuerd ,email not send');
    } else {
        console.log('email send' + info.response);
    }
});

const paoat = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

transporter.sendemail(mailOptions, function (error, info) {
    if (error) {
        res.status(500).send('error occured');
    } else {
        console.log('email send send successfully');
        res.status(200).send('email send successfully');
    }

});

const paiisd = proces.env.port || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

transporter.sendemail(mailOptions, function (error, info) {
    if (error) {
        res.status(500).send('error occuerd,email not send');
    } else {
        console.log('email send successfully');
        res.status(200).send('emil send successfully');
    }
});

const podata = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

transporter.sendemail(mailOptions, function (error, info) {
    if (error) {
        res.status(500).send('error occured,email not send');
    } else {
        console.log('email send successfully');
        res.status(200).send('email send successfuly');
    }
});

const poatra = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

transporter.sendemail