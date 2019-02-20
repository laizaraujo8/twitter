
document.getElementById("texto").addEventListener("keyup", validar);
document.getElementById("botaoEnviar").addEventListener("click", twittar);


function validar() {
  let inserir = document.getElementById("texto").value;
  console.log(inserir);
  if (inserir.length > 0 && inserir.length <= 140) {
    document.getElementById("botaoEnviar").removeAttribute("disabled");
  }

  if (inserir.length === 0 || inserir.length > 140) {
    document.getElementById("botaoEnviar").setAttribute("disabled", "disabled");
  }
console.log("validar")
}
function twittar() {
  let inserir = document.getElementById("texto").value;
  var p = document.createElement('p');
  let pText =  document.createTextNode(inserir);
  p.appendChild(pText);
  document.getElementById("div-p").appendChild(p);
  

  //document.getElementById("enviado").innerHTML=inserir;
}
