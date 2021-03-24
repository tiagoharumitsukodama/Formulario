const schema = require('./schema')

async function conectarBanco(body) {

    const instance = await schema.find({
        nome: body.nome,
        senha: body.senha
    })

    return instance;
}
	
function getInformacoes(body, resultado, callbacklController) {

    conectarBanco(body)
        .then( dados => callbacklController(resultado, dados) )
        .catch( err => console.log(err) )
}

module.exports = getInformacoes;