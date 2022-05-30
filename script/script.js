const conteudoEscondido = document.getElementById("wrapContent");
var ls = localStorage.getItem("namespace.visited");

function comprar() {
  window.open("https://pay.kiwify.com.br/DFdM6CV", "_blank");
}

function delay() {
  setTimeout(() => {
    conteudoEscondido.style.display = "flex";
  }, 3000);
}

function checkLocalStorage() {
  if (ls == null) {
    delay();
    localStorage.setItem("namespace.visited", 1);
  } else {
    conteudoEscondido.style.display = "flex";
  }
}

checkLocalStorage();
