const conteudoEscondido = document.getElementById("wrapContent");
const botaoPlayYoutube = document.getElementsByClassName("ytp-large-play-button")
const botao = [...botaoPlayYoutube]

function comprar() {
    window.open("https://pay.kiwify.com.br/DFdM6CV", "_blank")
}

function delay() {
    setTimeout(() => {
        conteudoEscondido.style.display = "flex"
    },1200000)
}

delay();
