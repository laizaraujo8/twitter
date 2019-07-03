
document.getElementById("texto").addEventListener("keyup", validar);
document.getElementById("botaoEnviar").addEventListener("click", 
(event) => {
  event.preventDefault();
  twittar()
});
document.getElementById("texto").addEventListener('keydown', autoSize);


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
    document.getElementById("contador").style.color = "DarkOrange";
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
  let twitada = document.getElementById("div-p");
  var p2 = twitada.getElementsByTagName('p')[0];

  let pText = document.createTextNode(inserir);
  p.appendChild(pText);
  document.getElementById("div-p").appendChild(p);
  twitada.insertBefore(p, p2);
  document.getElementsByid('texto').value="";
}

