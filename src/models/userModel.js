
const mongoose = require('mongoose');

async function adicionarAoBanco() {

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
        nome: 'boku',
        telefone: '999999999',
        cep: '05343060',
        bairro: 'Jaguare',
        rua: 'Desembargador' 
    });
	pessoa.save().then(() => console.log('salvo'));
	
	return 'ok';
}


conectarBanco()
	.then( data => console.log(data) )
	.catch( err => console.log(err) )
