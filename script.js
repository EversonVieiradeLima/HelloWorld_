const elementoResposta = document.querySelector("#resposta")
const elementoResposta2 = document.querySelector("#resposta2")
const inputPergunta = document.querySelector("#inputPergunta")

function procurar() {
    const pergunta = "<div>" + inputPergunta.value + "</div>"

    if(inputPergunta.value == "") {
        elementoResposta.innerHTML = "Digite sua pergunta"
        elementoResposta2.innerHTML = ""
        return
    }

    if(algoritmo.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[1]
        elementoResposta2.innerHTML = respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[0]
        elementoResposta2.innerHTML = ""
    }

    if(italico.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[3]
        elementoResposta2.innerHTML = ""
        return
    }

    if(css.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[4]
        elementoResposta2.innerHTML = ""
        return
    }

    if(opacidadeFundo.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[5]
        elementoResposta2.innerHTML = respostas[6]
        return
    }

    if(corFundo.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[5]
        elementoResposta2.innerHTML = ""
        return
    }

    if(opacidadeTexto.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[7]
        elementoResposta2.innerHTML = ""
        return
    }

    if(linkarCss.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[8]
        elementoResposta2.innerHTML = respostas[9]
        return
    }

    if(linkarJs.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[10]
        elementoResposta2.innerHTML = respostas[11]
        return
    }

    if(classe.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[12]
        elementoResposta2.innerHTML = respostas[13]
        return
    }

    if(ids.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[14]
        elementoResposta2.innerHTML = ""
        return
    }

    if(classId.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[12] + " - " + respostas[13]
        elementoResposta2.innerHTML = "Já " + respostas[14] + " - Obs.: Se caso tenha um 'id' dentro de uma div ou vice-versa, o 'id' tem sempre mais peso do que a 'class'."
        return
    }

    if(html.includes(inputPergunta.value)) {
        elementoResposta.innerHTML = pergunta + respostas[15]
        elementoResposta2.innerHTML = respostas[16]
        return
    }


}