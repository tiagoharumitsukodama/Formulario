
let inputCEP = document.querySelector('input#cep')

inputCEP.addEventListener('focusout', () => {

    let cep = inputCEP.value;
    cep = cep.replace(/\D/g, '')

    if (cep.length === 8) {

        getInformacoesPeloCEP(cep)
            .then( data => {
                let inputBairro = document.querySelector('input#bairro')
                let inputRua = document.querySelector('input#rua')

                inputBairro.value = data.bairro
                inputRua.value = data.logradouro
            })
            .catch( error => console.log(error) )
    }
})

async function getInformacoesPeloCEP( cep ) {
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    let respostaJson = resposta.json();

    return respostaJson;
}