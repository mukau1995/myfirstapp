var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/', function(req, res, next) {
  res.render('user');
});

router.post('/create', function(req, res, next) {
    
  var eenNaam     = req.body.Naam;
  var eenAdres = req.body.Adres;
  var eenPostcode         = req.body.PostcodeGemeente;
  var eenTafel      = req.body.Tafel;
  var eenUur      = req.body.Uur;
  var eenDatum      = req.body.Datum;
  var telefoonnummer      = req.body.Telefoonnummer;
  var eenemail      = req.body.Email;

 var sql = `INSERT INTO restaurant1 (Naam, Adres, PostcodeGemeente, Tafel, Uur, Datum, Telefoonnummer, Email) VALUES ('${eenNaam}', '${eenAdres}', '${eenPostcode}', '${eenTafel}', '${eenUur}', '${eenDatum}','${telefoonnummer}','${eenemail}')`;
 db.query(sql,function (err, data) {
    if (err) throw err;
         console.log("record inserted");
     });
     res.redirect('/after');
});

module.exports = router;
