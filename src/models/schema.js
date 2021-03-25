const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({ 
    nome: String,
    telefone: String,
    cep: String,
    bairro: String,
    rua: String,
    senha: String
});

module.exports = mongoose.model('Info', userSchema);
