let controller_informacoes = require('./../models/pegarDados')


exports.callBack_mostrarInformacoes = function (req, res) {

    controller_informacoes( dados => {
        res.render('informacoes/index', { data: dados })
    })
}
