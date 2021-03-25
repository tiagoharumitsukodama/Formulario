
let controller_dados = require('./../models/verificacao')

exports.callBack_verificacao = function (req, res, next) {

    let encontrou = new Promise( (res, rej) => {

        let resultado;
        controller_dados( req.body, resultado, (resultado,dados) => {

           resultado = dados;

            res(resultado)
        })
    })
    
    encontrou
            .then( dado => {
                if(dado)
                    res.redirect('/informacoes');
                else
                    res.redirect('/login');
            })
            .catch( erro => console.log('Erro ao verificar a senha') )
}

exports.callBack_verificar = function (req, res, next) {

    res.render('login/index')
}