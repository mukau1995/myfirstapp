var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET users listing. */

router.get('/checkout', function(req, res, next) {
  res.render('checkout');
});

router.post('/checkout-create', function(req, res, next) {
    
  var eenCheckoutNaam     = req.body.Naam;
  var eenCheckoutUur      = req.body.Uur;

 var sql = `INSERT INTO Checkout (Naam, Uur) VALUES ('${eenCheckoutNaam}', '${eenCheckoutUur}')`;
 db.query(sql,function (err, data) {
    if (err) throw err;
         console.log("record inserted");
     });
     res.redirect('/after');
});

module.exports = router;
