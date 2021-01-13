var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.json({sum: (parseInt(req.params.id)+10)});
});

router.get('/:id/:second', function(req, res, next) {
  res.json({sum: (parseInt(req.params.id)) + (parseInt(req.params.second))});
});

module.exports = router;
