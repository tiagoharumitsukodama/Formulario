const addAoDB = require('../models/cadastrar.js')


exports.callBack_cadastrarInformacoes = function (req, res) {

    addAoDB(req.body);
    res.redirect('/informacoes');
}
