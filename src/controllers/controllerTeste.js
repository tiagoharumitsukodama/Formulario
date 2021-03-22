

exports.callback_teste = function (req, res) {
    res.sendFile( __dirname + '/index.html')

    console.log(req.body)
}

exports.callBack_cadastrarInformacoes = function (req, res) {

    console.log(req.body.nome);
    res.send("recieved your request!");
 }