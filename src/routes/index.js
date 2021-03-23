
var express = require('express')
var router = express.Router()

var controller_index = require('../controllers/index');

router.get('/', controller_index.callBack_monstrarIndex)

router.post('/', controller_index.callBack_cadastrarInformacoes);

module.exports = router;