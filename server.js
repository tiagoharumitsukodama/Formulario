/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').parse()
}
*/
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const indexRoute = require('./src/routes/index.js')
const informacoesRoute = require('./src/routes/informacoes.js')


app.use(express.urlencoded({
    extended: true
  }))

app.set("views",path.resolve(__dirname,'src/views'))  
app.set('view engine','ejs')  


app.use('/', indexRoute)
app.use('/informacoes', informacoesRoute)


app.listen(port, () => {
    console.log('Ouvindo')
})