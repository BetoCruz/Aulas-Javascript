//Exercicios com manipulação de number

const numero = Number(prompt("Digite um numero"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = ` 
<p>Raiz quadrada do seu numero: ${numero**0.5}</p>           
<p>${numero} é Interiro ? ${Number.isInteger(numero) }.</p>
<p>É NaN?  ${Number.isNaN(numero)}.</p>
<p>Arredondando par baixo: ${Math.ceil(numero)}.</p>
<p>Arresondando para cima: ${Math.floor(numero)}.</p>
<p>Com duas casas decimais: ${numero.toFixed(2)}</p>.
`;
// forma alternativa ----------------------------------------------------------
texto.innerHTML += '';
texto.innerHTML += `<p>Raiz quadrada do seu numero: ${numero**0.5}</p>`;
texto.innerHTML += `<p>${numero} é Interiro ? ${Number.isInteger(numero) }.</p>`;
texto.innerHTML += `<p>É NaN?  ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando par baixo: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Arresondando para cima: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;

