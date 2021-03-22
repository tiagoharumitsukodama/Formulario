/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse()
}
*/

const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const index = require('./src/routes/index')


app.use(express.static(__dirname + '/src/public'));
app.use(express.static(__dirname + '/src/views'));
app.use('/', index);
app.use(express.urlencoded({extended: false}))


app.listen(port, () => {
    console.log('Ouvindo')
})