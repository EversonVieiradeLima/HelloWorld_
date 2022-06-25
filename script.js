const elementoResposta = document.querySelector("#resposta")
const elementoResposta2 = document.querySelector("#resposta2")
const inputPergunta = document.querySelector("#inputPergunta")
const respostas = [
    "Um algoritmo é simplesmente uma série de instruções a serem seguidas para resolver um problema.",
    "tag < em >, tag < i > ou font-style: italic;",
    "Cascading Style Sheets (Folha de Estilo em Cascata) é a apresentação visual para o cliente; são estilos para o HTML.",
    "Resposta não consta",
    "E quando que devem ser criados? Sempre que queremos montar uma sequência de passos necessários para solucionar um problema.",
    "Para mudar propriedades de texto como a cor do fundo no CSS utilizaremos o background-color, e o valor que ela precisa é de uma cor, que pode ser o nome da cor em inglês como red ou um hexadecimal como #000000 (que representa a cor preta).",
    "Mas para diminuir a opacidade do fundo do texto, utilizando o formato rgba deverá funcionar: background-color: rgba(10, 23, 55, 0.5); onde 0.5 é o nível de opacidade, que vai de 0 a 1 onde o valor 0 indica um elemento completamente transparente e o valor 1 completamente opaco.",
    "Para alterar a opacidade de um elemento, basta atribuir um valor entre 0 e 1 à propriedade, opacity. Neste caso, o valor 0 indica um elemento completamente transparente, enquanto o valor 1 torna o elemento totalmente opaco. Ex.: opacity: 0.6",
    "< head >< link rel=''stylesheet'' type=''text/css'' href=''stylesheet.css'' media=''screen'' />< /head >",
    "Certifique de informar o caminho correto do CSS no href. É recomendada que o arquivo CSS esteja no mesmo diretório do arquivo HTML ou que seja criado um subdiretório chamado CSS para armazenar os arquivos (se os arquivos forem armazenados no diretório CSS, o href deve ser mudado para href=”CSS/stylesheet.css” no exemplo acima).",
    "",
]

function procurar() {
    const pergunta = "<div>" + inputPergunta.value + "</div>"

    if(inputPergunta.value == "") {
        alert("Digite sua pergunta")
        return
    }

    if(inputPergunta.value == "O que é um algoritmo?") {
        elementoResposta.innerHTML = pergunta + respostas[0]
        if(inputPergunta.value == "O que é um algoritmo?") {
            elementoResposta2.innerHTML = respostas[4]
            return
        }    
        return 
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "algoritmo") {
            elementoResposta.innerHTML = pergunta + respostas[0]
            if(inputPergunta.value == "algoritmo") {
                elementoResposta2.innerHTML = respostas[4]
                return
            }
            return
    } else {
            elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Algoritmo") {
            elementoResposta.innerHTML = pergunta + respostas[0]
            if(inputPergunta.value == "Algoritmo") {
                elementoResposta2.innerHTML = respostas[4]
                return
            }
            return 
    } else {
            elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é um algoritmo?") {
            elementoResposta.innerHTML = pergunta + respostas[0]
            if(inputPergunta.value == "o que é algoritmo?") {
                elementoResposta2.innerHTML = respostas[4]
                return
            }
            return 
    } else {
            elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "O que é um algoritmo") {
            elementoResposta.innerHTML = pergunta + respostas[0]
            if(inputPergunta.value == "O que é algoritmo") {
                elementoResposta2.innerHTML = respostas[4]
                return
            }
            return 
    } else {
            elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é um algoritmo") {
            elementoResposta.innerHTML = pergunta + respostas[0]
            if(inputPergunta.value == "o que é um algoritmo") {
                elementoResposta2.innerHTML = respostas[4]
                return
            }
            return 
    } else {
            elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "O que é algoritmo?") {
            elementoResposta.innerHTML = pergunta + respostas[0]
            if(inputPergunta.value == "O que é algoritmo?") {
                elementoResposta2.innerHTML = respostas[4]
                return
            }
            return 
    } else {
            elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é algoritmo?") {
            elementoResposta.innerHTML = pergunta + respostas[0]
            if(inputPergunta.value == "o que é algoritmo?") {
                elementoResposta2.innerHTML = respostas[4]
                return
            }
            return 
    } else {
            elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "O que é algoritmo") {
            elementoResposta.innerHTML = pergunta + respostas[0]
            if(inputPergunta.value == "O que é algoritmo") {
                elementoResposta2.innerHTML = respostas[4]
                return
            }
            return 
    } else {
            elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é algoritmo") {
            elementoResposta.innerHTML = pergunta + respostas[0]
            if(inputPergunta.value == "o que é algoritmo") {
                elementoResposta2.innerHTML = respostas[4]
                return
            }
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

    if(inputPergunta.value == "como deixar a fonte em italico?") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como deixar a fonte em italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como deixar a fonte em italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como deixar fonte em italico?") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como deixar fonte em italico?") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como deixar fonte em italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como deixar fonte em italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como deixar a fonte italico?") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como deixar a fonte italico?") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como deixar a fonte italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como deixar a fonte italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "deixar a fonte em italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Deixar a fonte em italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "deixar fonte em italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Deixar fonte em italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Deixar a fonte italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "deixar a fonte italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Deixar fonte italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "deixar fonte italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "fonte em italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Fonte em italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "fonte italico") {
        elementoResposta.innerHTML = pergunta + respostas[1]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Fonte italico") {
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

    if(inputPergunta.value == "o que é CSS?") {
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

    if(inputPergunta.value == "O que é css") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "O que é CSS") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "o que é CSS") {
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

    if(inputPergunta.value == "Css") {
        elementoResposta.innerHTML = pergunta + respostas[2]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como diminuir a opacidade do fundo do texto?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "Como diminuir a opacidade do fundo do texto?") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como diminuir a opacidade do fundo do texto?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "como diminuir a opacidade do fundo do texto?") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como diminuir a opacidade do fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "Como diminuir a opacidade do fundo do texto") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como diminuir a opacidade do fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "como diminuir a opacidade do fundo do texto") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como diminuir opacidade do fundo do texto?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "Como diminuir opacidade do fundo do texto?") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como diminuir opacidade do fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "Como diminuir opacidade do fundo do texto") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como diminuir opacidade do fundo do texto?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "como diminuir opacidade do fundo do texto?") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como diminuir opacidade do fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "como diminuir opacidade do fundo do texto") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Diminuir a opacidade do fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "Diminuir a opacidade do fundo do texto") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "diminuir a opacidade do fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "diminuir a opacidade do fundo do texto") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Diminuir opacidade do fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "Diminuir opacidade do fundo do texto") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "diminuir opacidade do fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        if(inputPergunta.value == "Diminuir opacidade do fundo do texto") {
            elementoResposta2.innerHTML = respostas[6]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como mudar a cor do fundo do texto?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como mudar a cor do fundo do texto?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como mudar a cor do fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como mudar a cor de fundo do texto?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como mudar a cor de fundo do texto?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como mudar a cor de fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como mudar a cor de fundo do texto") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como mudar a cor de fundo?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como mudar a cor de fundo?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como mudar a cor de fundo") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como mudar a cor de fundo") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como mudar a cor do fundo?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como mudar a cor do fundo?") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como mudar a cor do fundo") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como mudar a cor do fundo") {
        elementoResposta.innerHTML = pergunta + respostas[5]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como diminuir opacidade do texto?") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como diminuir opacidade do texto?") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como diminuir opacidade do texto") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como diminuir opacidade do texto") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Diminuir opacidade do texto") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "diminuir opacidade do texto") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como diminuir opacidade?") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como diminuir opacidade?") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como diminuir opacidade") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como diminuir opacidade") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Diminuir opacidade") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "diminuir opacidade") {
        elementoResposta.innerHTML = pergunta + respostas[7]
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como linkar o CSS no HTML?") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "Como linkar o CSS no HTML?") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como linkar o CSS no HTML?") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "como linkar o CSS no HTML?") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como linkar o CSS no HTML") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "Como linkar o CSS no HTML") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como linkar o CSS no HTML") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "como linkar o CSS no HTML") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como linkar CSS no HTML?") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "Como linkar CSS no HTML?") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como linkar CSS no HTML?") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "como linkar CSS no HTML?") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como linkar CSS no HTML") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "Como linkar CSS no HTML") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como linkar CSS no HTML") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "como linkar CSS no HTML") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como linkar o css no html?") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "Como linkar o css no html?") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como linkar o css no html?") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "como linkar o css no html?") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como linkar o css no html") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "Como linkar o css no html") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como linkar o css no html") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "como linkar o css no html") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como linkar css no html?") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "Como linkar css no html?") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como linkar css no html?") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "como linkar css no html?") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "Como linkar css no html") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "Como linkar css no html") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }

    if(inputPergunta.value == "como linkar css no html") {
        elementoResposta.innerHTML = pergunta + respostas[8]
        if(inputPergunta.value == "como linkar css no html") {
            elementoResposta2.innerHTML = respostas[9]
            return
        }
        return
    } else {
        elementoResposta.innerHTML = pergunta + respostas[3]
    }
}