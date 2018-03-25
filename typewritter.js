var msg =
  "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.";

var print = document.querySelector(".typewritter");
var button = document.querySelector("button");
var i = 0,
  speed = 10;

print.style.fontSize = "20px";
console.log(print.style.fontSize);
function typewritter() {
  if (i < msg.length) {
    print.innerHTML += msg[i];
  }
  i++;

  if (i >= msg.length) {
    return false;
  }
  setTimeout(typewritter, speed);
}

button.addEventListener("click", typewritter);
