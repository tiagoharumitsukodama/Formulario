const addAoDB = require('../models/cadastrar.js')


exports.callBack_cadastrarInformacoes = function (req, res) {

    addAoDB(req.body);
    res.send("recieved your request!");
}
