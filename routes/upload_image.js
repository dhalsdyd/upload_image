var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('upload/upload-image');
  });
  
router.post('/image', function(req, res, next) {
res.redirect(303,'/upload/success')
});

router.get('/success', function(req, res, next) {
res.render('upload/upload-success');
});
router.get('/error', function(req, res, next) {
res.render('upload/upload-error');
});

module.exports = router;