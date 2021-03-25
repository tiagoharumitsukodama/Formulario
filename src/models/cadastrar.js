
const schema = require('./schema')

function adicionarAoBanco(dados = {}) {

    adicionar(dados)
        .then( dados => console.log(dados) )
}

async function adicionar(dados) {

	const pessoa = new schema({ 

        nome: dados.nome,   
        telefone: dados.telefone,
        cep: dados.cep,
        bairro: dados.bairro,
        rua: dados.rua ,
        senha: dados.senha
    });

	const novaPessoa = await pessoa.save()
    
    return 'ok';
}

module.exports = adicionarAoBanco;
