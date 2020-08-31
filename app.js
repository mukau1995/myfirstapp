var createError = require('http-errors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var afterRouter = require('./routes/after');
// **********************************************************************
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/public'));
app.use('/images', express.static(__dirname + '/images'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs', );

app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.get('/after', afterRouter);

app.get('/index', function(req, res, next) {
  res.render('index');
});

app.get('/checkout-page', function(req, res, next) {
  res.render('checkout-page');
});
// checkout knop moest ik hier doen, omdat het niet werkt in een aparte js bestand
app.get('/checkout', function(req, res, next) {
    res.render('checkout');
  });

app.get('/contact', function(req, res, next) {
    res.render('contact');
  });
app.get('/contact-after', function(req, res, next) {
    res.render('contact-after');
  });
  // **********************************************************************

  app.post('/checkout-create', function(req, res, next) {
      
    var eenCheckoutNaam     = req.body.Naam;
    var eenCheckoutUur      = req.body.Uur;
  
   var sql = `INSERT INTO Checkout (Naam, Uur) VALUES ('${eenCheckoutNaam}', '${eenCheckoutUur}')`;
   db.query(sql,function (err, data) {
      if (err) throw err;
           console.log("record inserted");
       });
       res.redirect('/checkout-page');
  });
  // **********************************************************************
  app.post('/send', function(req, res) {
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
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Create the transporter with the required configuration for Outlook
// change the user and pass !
// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
      user: 'mukauelie@gmail.com',
      pass: 'esther1995'
  }
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"vandaagzitikhier.be" <mukauelie@gmail.com>', // sender address
  to: 'Unique Websites, uniquewebsites77@hotmail.com', // list of receivers
  subject: 'Contact openemen', // Subject line
  text: output, // plain text body
  html: output // html body
};

// send mail with defined transport object
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



  

module.exports = app;