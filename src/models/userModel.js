/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://tiago:<password>@cluster0.9ftg4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/

/*
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('Conectado à Mongoose'))
*/

//model.exports = mongoose.model(...)