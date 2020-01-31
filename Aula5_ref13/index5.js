const nome = prompt("Digite seu nome coompleto:");

document.body.innerHTML += ` O  seu nome é : <strong>${nome}</strong><br/>`;
document.body.innerHTML += `Seu nome tem qtas letras:<strong> ${nome.length} </strong><br/>`;
document.body.innerHTML += `A segunda letra do seu nome é:<strong> ${nome[1]} </strong><br/>`;
document.body.innerHTML +=  `Qual o primeiro indice da letra "e" do seu nome:<strong> ${nome.indexOf("e")}</strong><br/>`;  
document.body.innerHTML += `Qual o último indice da letra "o" do seu nome :<strong> ${nome.lastIndexOf("o")}</strong><br/>`;       
document.body.innerHTML += `As últimas tres letras do seu nome são:<strong> ${nome.slice(-3,nome.length)}</strong><br/>`;
document.body.innerHTML += `As paçavras do seu nome são :<strong> ${nome.split(" ")}</strong> <br/>`;
document.body.innerHTML += `Seu nome com letras maiúsculas:<strong> ${nome.toUpperCase()}</strong> <br/>`;        
document.body.innerHTML += `Seu nome com letras minúsculas:<strong> ${nome.toLowerCase()}</strong> <br/>`;