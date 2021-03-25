const schema = require('./schema')
const bcrypt = require('bcrypt')

async function conectarBanco(body) {

    const instance = await schema.find({
        nome: body.nome
    })

    if( !instance.length )
        return false;

    const achou = await bcrypt.compare(body.senha, instance[0].senha).then(function(result) {
        return result;
    });

    return achou;
}
	
function getInformacoes(body, resultado, callbacklController) {

    conectarBanco(body)
        .then( dados => callbacklController(resultado, dados) )
        .catch( err => console.log(err) )
}

module.exports = getInformacoes;