const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const respostas = [
    "Um algoritmo é simplesmente uma série de instruções a serem seguidas para resolver um problema. E quando que devem ser criados? Sempre que queremos montar uma sequência de passos necessários para solucionar um problema.",
    "tag < em >, tag < i > ou font-style: italic;",
    "Cascading Style Sheets (Folha de Estilo em Cascata) é a apresentação visual para o cliente; são estilos para o HTML.",
    "Resposta não consta",
]

function procurar() {
    const pergunta = "<div>" + inputPergunta.value + "</div>"

    if(inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    if(inputPergunta.value == "O que é um algoritmo?") {
        elementoResposta.innerHTML = respostas[0]
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "algoritmo") {
        elementoResposta.innerHTML = respostas[0]
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Algoritmo") {
        elementoResposta.innerHTML = respostas[0]
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é um algoritmo?") {
        elementoResposta.innerHTML = respostas[0]
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "O que é um algoritmo") {
        elementoResposta.innerHTML = respostas[0]
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é um algoritmo") {
        elementoResposta.innerHTML = respostas[0]
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "O que é algoritmo?") {
        elementoResposta.innerHTML = respostas[0]
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é algoritmo?") {
        elementoResposta.innerHTML = respostas[0]
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "O que é algoritmo") {
        elementoResposta.innerHTML = respostas[0]
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é algoritmo") {
        elementoResposta.innerHTML = respostas[0]
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como deixar a fonte em italico?") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "O que é CSS?") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é css?") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "O que é css?") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é css") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é css") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é CSS?") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "CSS") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "css") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }
}