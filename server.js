/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse()
}
*/
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const teste = require('./src/routes/routesTeste')

app.use(express.static(__dirname + '/src/public'));
app.use(express.static(__dirname + '/src/views'));
app.use('/', teste);
app.use(express.urlencoded({extended: false}))

const mongoose = require('mongoose');

async function conectarBanco() {

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




app.listen(port, () => {
    console.log('Ouvindo')
})