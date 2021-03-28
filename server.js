const dotenv = require('dotenv');
const dotenvParseVariables = require('dotenv-parse-variables');
let env = dotenv.config({})

if (env.error) throw env.error;
    env = dotenvParseVariables(env.parsed);


const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const indexRoute = require('./src/routes/index.js')
const informacoesRoute = require('./src/routes/informacoes.js')
const loginRoute = require('./src/routes/login.js');
const port = process.env.PORT || 3000
const uri = process.env.DATABASE_URL || env.DATABASE_URL


app.use(express.urlencoded({
    extended: true
  }))

app.use(express.static(__dirname + '/src/public'));
app.set("views",path.resolve(__dirname,'src/views'))  
app.set('view engine','ejs') 

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('conectado ao banco de dados'))

app.use('/', indexRoute)
app.use('/login', loginRoute)
app.use('/informacoes', informacoesRoute)


app.listen(port, () => {
    console.log('Ouvindo')
})
