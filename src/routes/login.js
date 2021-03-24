let express = require('express')
let router = express.Router()

let controller_login = require('../controllers/login');

router.get('/', controller_login.callBack_verificar);

router.post('/', controller_login.callBack_verificacao)

module.exports = router;