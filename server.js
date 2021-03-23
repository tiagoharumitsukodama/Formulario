/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse()
}
*/
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const indexRoute = require('./src/routes/index.js')

app.use(express.urlencoded({
    extended: true
  }))

app.use(express.static(__dirname + '/src/public'));
app.use(express.static(__dirname + '/src/views'));



app.use('/', indexRoute)

app.listen(port, () => {
    console.log('Ouvindo')
})