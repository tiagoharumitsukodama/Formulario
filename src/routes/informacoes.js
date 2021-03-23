
let express = require('express')
let router = express.Router()

let controller_informacoes = require('../controllers/informacoes');

router.get('/', controller_informacoes.callBack_mostrarInformacoes);


module.exports = router;