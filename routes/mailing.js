var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var app = require('../app');

router.get('/', function(req, res, next) {
  res.render('contact');
});

router.post('/create', function(req, res, next) {

const output = `
  <p>U hebt een nieuw bericht</p>
  <h3> Details van de klant</h3>
  <ul>
    <li>Voornaam: ${req.body.achternaam}</li>
    <li>Achternaam: ${req.body.voornaam}</li>
    <li>E-mailadres: ${req.body.email}</li>
    <li>Telefoonnummer: ${req.body.telnumber}</li>
  </ul>
  <h3>Bericht:</h3>
  <p>${req.body.onderwerp}</p>
  `;

  "use strict";
async function main() {
let transporter = nodemailer.createTransport({
service: 'gmail',
auth: {
    user: 'mukauelie@gmail.com',
    pass: 'esther1995'
}
});

let mailOptions = {
from: '"vandaagzitikhier.be" <mukauelie@gmail.com>', // sender address
to: 'Unique Websites, uniquewebsites77@hotmail.com', // list of receivers
subject: 'Contact openemen', // Subject line
text: output, // plain text body
html: output // html body
};

transporter.sendMail(mailOptions, (error, info) => {
if (error) {
    return console.log(error);
}
console.log('Message %s sent: %s', info.messageId, info.response);
});
res.redirect('/contact-after');
}
main().catch(console.error);

});
module.exports= router;