const addAoDB = require('../models/cadastrar.js')


exports.callBack_monstrarIndex = function (req, res) {

    res.render('index');
}


exports.callBack_cadastrarInformacoes = function (req, res) {

    addAoDB(req.body);
    //res.redirect('/informacoes');
}

