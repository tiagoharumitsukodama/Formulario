
var express = require('express')
var router = express.Router()

var controller_informacoes = require('../controllers/informacoes');

router.get('/', controller_informacoes.callBack_mostrarInformacoes);


module.exports = router;