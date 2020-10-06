var createError = require('http-errors');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var db=require('./database');
var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var afterRouter = require('./routes/after');
var mailingRouter = require('./routes/mailing');

var checkOutRouter= require('./routes/checkout');
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs', );

app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.get('/after', afterRouter);
app.use('/checkout', checkOutRouter);
app.use('/contact', mailingRouter);

app.get('/index', function(req, res, next) {
  res.render('index');
});

app.get('/checkout-page', function(req, res, next) {
  res.render('checkout-page');
});
// checkout knop moest ik hier doen, omdat het niet werkt in een aparte js bestan

app.get('/contact-after', function(req, res, next) {
    res.render('contact-after');
  });
  
module.exports = app;