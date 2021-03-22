//const testModel = require('../models/userModel')

var express = require('express')
var router = express.Router()

var controller_teste = require('../controllers/controllerTeste');

router.get('/', controller_teste.callback_teste);

module.exports = router;