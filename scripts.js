/*variaveis= É um espaço da memoria do computador que criamos pra armazenar informação (um numero um texto uma letra uma imagem */
/* Funções= um trecho do codigo que so é executado quando é chamado*/


let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function colocarnatela(dados) {
    console.log(dados)
    
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    
    document.querySelector(".temp").innerHTML = Math.floor (dados.main.temp) + "°C"
    
    document.querySelector(".icone").src ="https://openweathermap.org/img/wn/" + dados.weather[0].icone + ".png"
   
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    
    document.querySelector(".variacao").innerHTML = "umidade:" + dados.main.humidity + "%"
}


async function buscarcidade(cidade) {

    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave + 
        "&lang=pt_br" + 
        "&units=metric"
        )
        .then(resposta => resposta.json()) 

    colocarnatela(dados)
}

function cliqueinobotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarcidade(cidade)
}

