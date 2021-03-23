
const mongoose = require('mongoose');

function adicionarAoBanco(dados = {}) {

    adicionar(dados)
        .then( dados => console.log(dados) )
}

async function adicionar(dados) {

	const uri = "mongodb+srv://tiago:SenhaAtlas575@cluster0.9ftg4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

	mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

	const Info = mongoose.model('Info', { 
        nome: String,
        telefone: String,
        cep: String,
        bairro: String,
        rua: String 
    });

	const pessoa = new Info({ 
        nome: dados.nome,   
        telefone: dados.telefone,
        cep: dados.cep,
        bairro: dados.bairro,
        rua: dados.rua 
    });
	pessoa.save().then(() => console.log('salvo'));

    return 'ok';
}

module.exports = adicionarAoBanco;
