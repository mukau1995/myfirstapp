var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var db=require('./database');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var afterRouter = require('./routes/after');

app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs', );

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.get('/after', afterRouter);
app.get('/checkout-page', function(req, res, next) {
  res.render('checkout-page');
});
// checkout knop moest ik hier doen, omdat het niet werkt in een aparte js bestand
app.get('/checkout', function(req, res, next) {
    res.render('checkout');
  });
  
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

  

// catch 404 and forward to error handler


module.exports = app;
