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
    const {
        port, overflyingOrLanding, dateOfOperation, landingAirport, expectedDateArrival, expectedTimeArrival,
        expectedDateDeparture, expectedTimeDeparture, entrypoint, expectedate, expectetime, exitpoint,
        expectedate2, expectetime2, pointOfOrigin, arrival, departure, destination, servicesFacilities,
        operator, name, nationality, address, teleNumber, fax, email, afs, permitNumber,
        detailsOfOperator, name2, nationality2, mtow, registry, registrationNumber, flightNumber,
        airDropping, seatingCapacity, payloadCapacity, communicationEquipment, numberOfCrew, numberOfPassengers,
        generalDescription, dgr, indicated, nameofConsignor, postalAddress, telephoneNumber, faxNumber,
        emailConsignor, afsAddress, nameofConsignor1, postalAddress1, telephoneNumber1, faxNumber1, email1, afsAddress1,
        dgca, passengers
    } = req.body;

    const mailOptions = {
        from: "codehub.apps@gmail.com",
        to: "codehub.apps@gmail.com",
        subject: "Apply Permit Form Submission",
        text: `
       1. General Details of Aircraft Movement

        Purpose of Flight: ${port}
        FIR or Landing in Sri Lanka: ${overflyingOrLanding}
        Date of Operation: ${dateOfOperation}
        If landing in Sri Lanka: ${landingAirport}
        Expected Date Arrival: ${expectedDateArrival}
        Expected Time Arrival: ${expectedTimeArrival}
        Expected Date Departure: ${expectedDateDeparture}
        Expected Time Departure: ${expectedTimeDeparture}
        Inbound/Outbound ATS route itinerary including: ${entrypoint}
        Expected Date: ${expectedate}
        Expected Time: ${expectetime}
        Exitpoint: ${exitpoint}
        Expected Date: ${expectedate2}
        Expected Time: ${expectetime2}
        Point of Origin of the flight: ${pointOfOrigin}
        intended landing prior to arrival in Sri Lanka or fly over Colombo FIR: ${arrival}
        immediate landing after departure from Sri Lanka or fly over Colombo FIR: ${departure}
        Final Destination: ${destination}
        Services/Facilities: ${servicesFacilities}
        Type of aircraft and registration number: ${operator}

       2. Aircraft Operator Information

        Name: ${name}
        Nationality: ${nationality}
        Postal Address: ${address}
        Telephone Number: ${teleNumber}
        Fax Number: ${fax}
        E-mail: ${email}
        (AFS) Address: ${afs}
        Aircraft Operator’s Certificate/Permit Number: ${permitNumber}
        Details of Operator: ${detailsOfOperator}

       3. Aircraft Details

        Pilot-in-Command-Name: ${name2}
        Pilot-in-Command-Nationality: ${nationality2}
        MTOW: ${mtow}
        State of Registry: ${registry}
        Registration Number: ${registrationNumber}
        Flight Number: ${flightNumber}
        Air Dropping: ${airDropping}
        Maximum Passenger Seating Capacity: ${seatingCapacity}
        Maximum Payload Capacity: ${payloadCapacity}
        Communication Equipment Available: ${communicationEquipment}

       4. On-Board Details

        Number of Crew: ${numberOfCrew}
        Number of Passengers: ${numberOfPassengers}
        General description of the goods carried: ${generalDescription}
        DGR: ${dgr}
        Dangerous Goods on-board, UN number/ICAO Class and Division: ${indicated}
        1.Details of Consignor-Name of Consignor: ${nameofConsignor}
        Postal Address: ${postalAddress}
        Telephone Number: ${telephoneNumber}
        Fax Number: ${faxNumber}
        Email: ${emailConsignor}
        AFS Address: ${afsAddress}
        2.Details of Consignor-Name of Consignor: ${nameofConsignor1}
        Postal Address: ${postalAddress1}
        Telephone Number: ${telephoneNumber1}
        Fax Number: ${faxNumber1}
        Email: ${email1}
        AFS Address: ${afsAddress1}
        DGCA: ${dgca}
        Number of passengers: ${passengers}
    `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error occurred, email not sent.');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email Send successfully!');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;








