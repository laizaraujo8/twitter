
function twittar() {
  let inserir = document.getElementById("texto").value;
  document.getElementById("texto2").value = inserir;
}

function validar() {
  let inserir = document.getElementById("texto").value;
  if (inserir.length > 0 && inserir.length <= 140)  {
  document.getElementById("botaoEnviar").removeAttribute("disabled");
  }

  if (inserir.length===0 || inserir.length>140){
    document.getElementById("botaoEnviar").setAttribute("disabled","disabled"); 
  }
}

function caixasTwitte(){
  let inserir = document.createElement("li");
  novalista.textcontent=texto.value;
}

function myFunction() {
  alert('Ok')
}

function myFunction() {
  alert('agr vc chamou a função')
}

function twittar() {
  document.getElementById("inserir").innerHTML = "texto";
}