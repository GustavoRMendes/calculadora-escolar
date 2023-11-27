let nome = document.getElementById("nome");
let peso = document.getElementById("nota");
let peso2 = document.getElementById("notinha");
let resultado = document.getElementById("resultado");
let btn = document.getElementById("btn");
let error = document.getElementById("error");

btn.addEventListener("click", function calcular(e) {
  e.preventDefault();
  if (nome.value == "" || peso.value == "" || peso2.value == "") {
    error.textContent = "Preencha corretamente!";
    error.style.color = "yellow";
    setTimeout(() => {
      error.textContent = "";
    }, 2000);
    return;
  } else if (peso.value > 10 || peso2.value > 10) {
    error.textContent = "Dados Incorretos!";
    error.style.color = 'yellow'
    resultado.textContent = "";
  } else {
    let media = (peso.value * 2) + (peso2.value * 2);
    let mediaReal = media / 4;
    resultado.textContent = `${nome.value},  sua média é ${mediaReal}`;
    resultado.style.color = "white";
    peso.value = "";
    peso2.value = "";
    nome.value = "";
  }
});
