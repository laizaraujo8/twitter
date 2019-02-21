
document.getElementById("texto").addEventListener("keyup", validar);
document.getElementById("botaoEnviar").addEventListener("click", twittar);
document.getElementById("texto").addEventListener('keydown', autoSize);
document.getElementById("contador").addEventListener('keyup', trocaCor);

function autoSize() {
  let textarea = document.getElementById("texto");
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

function validar() {
  let inserir = document.getElementById("texto").value;
  let contador = 140 - inserir.length;

  if (inserir.length > 0 && inserir.length <= 140) {
    document.getElementById("botaoEnviar").removeAttribute("disabled");
  }

  if (inserir.length === 0 || inserir.length > 140) {
    document.getElementById("botaoEnviar").setAttribute("disabled", "disabled");
  }
  document.getElementById("contador").innerHTML = contador;

  if (inserir.length >= 120 && inserir.length <= 129) {
    document.getElementById("contador").style.color = "green";
  }

  else if (inserir.length >= 130 && inserir.length <= 140) {
    document.getElementById("contador").style.color = "red";
  }
  
  else
    document.getElementById("contador").style.color = "blue";
  }

function twittar() {
  let inserir = document.getElementById("texto").value;
  var p = document.createElement('p');
  let pText = document.createTextNode(inserir);
  p.appendChild(pText);
  document.getElementById("div-p").appendChild(p);
}

/*function trocaCor() {
  /*let inserir = document.getElementById("texto").value;
  if (inserir.length <= 140 && inserir.length >= 20) {
    document.getElementById("contador").style.color = "blue";
  }
  if (inserir.length <= 19 && inserir.length >= 10) {
    document.getElementById("contador").style.color = "orange";
  }
  if (inserir.length <= 9) {
    document.getElementById("contador").style.color = "red";
  }
  //document.getElementById("contador").innerHTML = trocaCor;

}*/
