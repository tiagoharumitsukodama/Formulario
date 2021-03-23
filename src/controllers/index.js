const addAoDB = require('../models/cadastrar.js')


exports.callBack_monstrarIndex = function (req, res, next) {

    res.render('index');
    next();
}


exports.callBack_cadastrarInformacoes = function (req, res, next) {

    addAoDB(req.body);
    res.redirect('/informacoes');
}

