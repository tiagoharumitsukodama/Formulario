

exports.callback_index = function (req, res) {
    res.sendFile( __dirname + '/index.html')

    console.log(req.body)
}

exports.callBack_cadastrarInformacoes = function (req, res) {

    console.log(req.body.nome);
    res.send("recieved your request!");
 }