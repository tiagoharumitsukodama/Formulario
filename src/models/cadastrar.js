
const schema = require('./schema')
const bcrypt = require('bcrypt')

function adicionarAoBanco(dados = {}) {

    adicionar(dados)
        .then( dados => console.log(dados) )
}

async function adicionar(dados) {

    filtrar(dados)

    const saltRounds = 10;
    const myPlaintextPassword = dados.senha;

    const encrypt = await bcrypt.hash(myPlaintextPassword, saltRounds).then( hash => {
        dados.senha = hash
    })

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

function filtrar(dados){
    dados.cep = dados.cep.match(/\d/g).join('');
    dados.telefone = dados.telefone.match(/\d/g).join('');

    return dados;
}

module.exports = adicionarAoBanco;
