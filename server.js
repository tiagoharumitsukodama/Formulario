/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse()
}
*/
const express = require('express')
const path = require('path')
const mongoose = require('mongoose');
const app = express()
const port = process.env.PORT || 3000
const indexRoute = require('./src/routes/index.js')
const informacoesRoute = require('./src/routes/informacoes.js')


app.use(express.urlencoded({
    extended: true
  }))

app.use(express.static(__dirname + '/src/public'));
app.set("views",path.resolve(__dirname,'src/views'))  
app.set('view engine','ejs') 


const uri = "mongodb+srv://tiago:SenhaAtlas575@cluster0.9ftg4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('conectado ao banco de dados'))


app.use('/', indexRoute)
app.use('/informacoes', informacoesRoute)


app.listen(port, () => {
    console.log('Ouvindo')
})


//LEITE QUENTES