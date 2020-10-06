var express = require('express');
var router = express.Router();
var app = require('../app');

router.get('/after', function(req, res, next) {
  res.render('after.ejs');
});

module.exports = router;
