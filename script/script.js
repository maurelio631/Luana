const conteudoEscondido = document.getElementById("wrapContent");
const botaoPlayYoutube = document.getElementsByClassName("ytp-large-play-button")
const botao = [...botaoPlayYoutube]
const cookies = localStorage.getItem('namespace.visited');
function comprar() {
    window.open("https://pay.kiwify.com.br/DFdM6CV", "_blank")
}

function delay() {
    if (cookies == null) {
        setTimeout(() => {
            conteudoEscondido.style.display = "flex"
        }, 1200000)
        localStorage.setItem('namespace.visited', 1)
        console.log(cookies)
    }else{
        conteudoEscondido.style.display = "flex"
        localStorage.setItem('namespace.visited', 1)
        console.log(cookies)
    }
}

delay();

