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

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tiago:<password>@cluster0.9ftg4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('aqui foi')
  client.close();
});

const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Conectado Mongoose'))

const testeSchema = new mongoose.Schema({
    nome: {
        type: String
        },
    idade: {
        numero: Number
        }
})

const tabela = mongoose.model('tabela', testeSchema);

const elemento1 = new tabela({
    nome: 'Alberto',
    numero: 67
})
const elemento2 = new tabela({
    nome: 'Alessandra',
    numero: 88
})

elemento1.save( () =>  console.log('salvando1'))
elemento2.save( () =>  console.log('salvando2'))


app.listen(port, () => {
    console.log('Ouvindo')
})