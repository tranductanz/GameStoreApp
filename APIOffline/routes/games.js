var express = require('express');
var router = express.Router();

const gameData = require('../public/data/gamesData');

router.get('/', function(req,res,next){
  res.send(gameData);
});

router.get('/:id', function(req,res,next) {
  const {id} = req.params;
  res.send(gameData[id])
})

module.exports = router;
