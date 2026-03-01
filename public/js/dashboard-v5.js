let carbono = localStorage.getItem("carbono") || 0;

function atualizar(){

document.getElementById("carbono").innerText = carbono+" kg";

let nivel = carbono<20 ? "Seed 🌱"
           : carbono<50 ? "Grower 🌿"
           : "Guardian 🌳";

document.getElementById("nivel").innerText = nivel;

let restante = carbono<20 ? 20-carbono
              : carbono<50 ? 50-carbono : 0;

document.getElementById("proximo").innerText =
restante>0 ? "Faltam "+restante+" kg" : "Nível máximo";

document.getElementById("bar").style.width =
Math.min(carbono/50*100,100)+"%";

let med=[];
if(carbono>=10) med.push("🌱 Primeira Semente");
if(carbono>=30) med.push("🌿 Agricultor Urbano");
if(carbono>=50) med.push("🌳 Guardião Verde");

document.getElementById("medalhas").innerHTML =
med.map(m=>"<li>"+m+"</li>").join("");

if(carbono>=10)
document.getElementById("capitulo").innerText =
"Capítulo 1 desbloqueado";

if(carbono>=30)
document.getElementById("capitulo").innerText =
"Capítulo 2 desbloqueado";
}

function plantar(){
carbono = parseInt(carbono)+5;
localStorage.setItem("carbono",carbono);
atualizar();
}

window.onload=atualizar;