const schema = require('./schema')

async function conectarBanco() {

	const instance = await schema.find({}).select({ '_id':0, 'nome': 1, 'cep': 1 })
	
    return instance;
}
	
function getInformacoes(callbacklController) {

    conectarBanco()
        .then( dados => callbacklController(dados) )
        .catch( err => console.log(err) )
}

module.exports = getInformacoes;