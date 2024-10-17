function inserir(valor) {
    // Obtém o valor do campo de entrada com o id "campo"
    var valorVoto = document.getElementById("campo").value;
    
    // Verifica se o campo está vazio
    if (valorVoto == "") {
        // Se estiver vazio, insere o valor recebido como parâmetro no campo
        document.getElementById("campo").value = valor;
    }

    // Verifica se o valor do voto é 7
    if(valorVoto == 7){
        // Se for 7, limpa o campo
        document.getElementById("campo").value = "";
    }

    // Verifica se o valor do voto é 8
    if(valorVoto == 8){
        // Se for 8, limpa o campo
        document.getElementById("campo").value = "";
    }
}

function corrige(){
    // Limpa o campo
    document.getElementById("campo").value = "";
}

var candidato1 = 0;
var candidato2 = 0;
var candidato3 = 0;
var candidato4 = 0;
var candidato5 = 0;
var candidato6 = 0;
var nulo = 0;
var branco = 0;
var totalVotos = 0;
var porcentagem = 0;

function votar(){
    // Obtém o valor do voto como um número inteiro
    var valorVoto = parseInt(document.getElementById("campo").value);
    
    // Verifica o valor do voto e incrementa o contador apropriado
    if(valorVoto == 1){
        candidato1 = candidato1 + 1;
        alert("O seu voto em Edimar foi computado com sucesso");
    }
    if(valorVoto == 2){
        candidato2 = candidato2 + 1;
        alert("O seu voto Thiago foi computado com sucesso");
    }
    if(valorVoto == 3){
        candidato3 = candidato3 + 1;
        alert("O seu voto em Rafael foi computado com sucesso");
    }
    if(valorVoto == 4){
        candidato4 = candidato4 + 1;
        alert("O seu voto em Vinicius Jr foi computado com sucesso");
    }
    if(valorVoto == 5){
        candidato5 = candidato5 + 1;
        alert("O seu voto em Neymar foi computado com sucesso");
    }
    if(valorVoto == 6){
        candidato6 = candidato6 + 1;
        alert("O seu voto em Andre foi computado com sucesso");
    }
    if(valorVoto == 7){
        nulo = nulo + 1;
        alert("O seu voto anulado foi computado com sucesso");
    }
    if(valorVoto == 8){
        branco = branco + 1;
        alert("O seu voto branco foi computado com sucesso");
    }

    // Calcula o total de votos e a porcentagem de votos nulos e brancos
    totalVotos = candidato1 + candidato2 + candidato3 + candidato4 + candidato5 + candidato6 + nulo + branco;
    porcentagem = (nulo + branco) * 100 / totalVotos;
    
    // Limpa o campo
    document.getElementById("campo").value = "";
}

function resultado() {
    // Atualiza os elementos HTML com os resultados
    document.getElementById("c1").innerHTML = candidato1;
    document.getElementById("c2").innerHTML = candidato2;
    document.getElementById("c3").innerHTML = candidato3;
    document.getElementById("c4").innerHTML = candidato4;
    document.getElementById("c5").innerHTML = candidato5;
    document.getElementById("c6").innerHTML = candidato6;
    document.getElementById("nulo").innerHTML = nulo;
    document.getElementById("branco").innerHTML = branco;
    document.getElementById("total").innerHTML = totalVotos;
    document.getElementById("percentual").innerHTML = porcentagem + "%";
}