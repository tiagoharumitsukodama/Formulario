/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse()
}
*/
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const teste = require('./src/routes/routesTeste')

app.use(express.static(__dirname + '/src/public'));
app.use(express.static(__dirname + '/src/views'));
app.use('/', teste)
/*
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})
const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Conectado à Mongoose'))
*/
app.listen(port, () => {
    console.log('Ouvindo')
})