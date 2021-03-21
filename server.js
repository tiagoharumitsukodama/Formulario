const express = require('express')
const app = express()
const port = 3000
const teste = require('./src/routes/routesTeste')

app.use(express.static(__dirname + '/src/public'));
app.use(express.static(__dirname + '/src/views'));

app.use('/', teste)



app.listen(port, () => {
    console.log('Ouvindo')
})