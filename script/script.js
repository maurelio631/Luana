const conteudoEscondido = document.getElementById("wrapContent");

function comprar() {
  window.open("https://pay.kiwify.com.br/DFdM6CV", "_blank");
}

function delay() {
  setTimeout(() => {
    conteudoEscondido.style.display = "flex";
  }, 1200000);
}

function checkLocalStorage() {
  if (localStorage == null) {
    localStorage.setItem("visited", "yes");
    delay();
  } else {
    conteudoEscondido.style.display = "flex";
  }
}

checkLocalStorage();
