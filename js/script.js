let agora = new Date();
let hora = agora.getHours();
let msg;

if (hora => 18){
    msg = "Boa noite";
}else if (hora => 13){
    msg = "Boa tarde";
}else{
    msg = "Bom dia";
}

document.getElementById("comprimento").textContent = msg