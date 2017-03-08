var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrProtection = csrf();
router.use(csrProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(error, docs){
    var productChunks = [];
    var chunkSize = 3;
    for(var i = 0; i < docs.length; i += chunkSize){
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shop Cart', products: productChunks });
  });
});

router.get('/user/signup', function(req, res, next){
  res.render('user/signup', {csrfToken: req.csrfToken()});
});

router.post('/user/signup', function(req, res, next){
  res.redirect('/');
});

module.exports = router;
