const valorMenor = 1
const valorMaior = 1000
const box = document.querySelector(".box")
let mensagemDeValor = document.getElementById("mensagemDeValor")
const mensagem = document.querySelector(".mensagem")


let valorAleatorio = parseInt(Math.random() * (valorMaior) + valorMenor)
console.log(valorAleatorio)

document.getElementById("menor-valor").textContent = valorMenor
document.getElementById("maior-valor").textContent = valorMaior

window.SpeechRecognition = window.SpeechRecongnition || webkitSpeechRecognition;
const recognition = new SpeechRecognition()

recognition.lang = "pt-br"
recognition.start()

recognition.addEventListener("result", onSpeak)

function onSpeak(e){
    let aparecerNaTela = e.results[0][0].transcript
    verificarValor(aparecerNaTela)
    mensagem.classList.remove("hidden")
}

function verificarValor(chute){
    let transformarInteiro = parseInt(chute)
    if(isNaN(transformarInteiro)){
        box.textContent = "Valor invalido";
        mensagemDeValor.textContent = "Valor invalido"
    }
    if(transformarInteiro > valorMaior){
        box.textContent = `o número acima do esperado`
        mensagemDeValor.innerHTML = `o numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i>`
    }
    if(transformarInteiro < valorMenor){
        box.textContent = "Valor abaixo do esperado"
        mensagemDeValor.innerHTML = `o numero secreto é maior <i class="fa-solid fa-arrow-up-long">`
    }
    if(transformarInteiro >= valorMenor && transformarInteiro <= valorMaior){
        box.textContent = transformarInteiro
        if(transformarInteiro < valorAleatorio){
            mensagemDeValor.innerHTML = `o numero secreto é maior <i class="fa-solid fa-arrow-up-long">`
        }else if(transformarInteiro > valorAleatorio){
            mensagemDeValor.innerHTML = `o numero secreto é menor <i class="fa-solid fa-arrow-down-long"></i>` 
        }else{
            document.querySelector("h1").textContent = "Parabens"
            document.querySelector("h3").remove()
            mensagemDeValor.innerHTML = `Este é o numero secreto <i class="fa-regular fa-face-smile"></i>`
        }
    }
}
recognition.addEventListener("end", ()=> recognition.start())
