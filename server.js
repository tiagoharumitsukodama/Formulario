/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse()
}
*/

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const teste = require('./src/routes/routesTeste')

const controllerDB = require('./src/controllers/controllerTeste')

app.use(express.static(__dirname + '/src/public'));
app.use(express.static(__dirname + '/src/views'));
app.use('/', teste);
app.use(express.urlencoded({extended: false}))
app.post('/', controllerDB.callBack_cadastrarInformacoes);


app.listen(port, () => {
    console.log('Ouvindo')
})