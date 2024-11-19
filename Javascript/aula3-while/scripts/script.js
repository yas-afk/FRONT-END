// DOM
// URL- LOCATION
// "BOTAO DE VOLTA" - HISTORY
// "SITE / CONTEUDO" - DOCUMENT

//window.location.reload()
//window.location = "https://www.google.com"

// document - documento
// getElementById - busca o sujeito pelo id
// Inner - coloca uma elemento dentro
// se InnerText - apenas o texto
// se InnerHTML - texto e código

document.getElementById("catalogo").innerText = "<h3>Oi</h3>";
document.querySelector("#catalogo").innerHTML = "olá";

function registrarNome() {
  nome = document.querySelector("#inputNome").value;
  document.querySelector("#catalogo").innerHTML = `
  <div id="nomeDiv">
  eu ${nome} sou muito top!
  </div>
  `;
  alert("O seu nome é " + nome);
}
