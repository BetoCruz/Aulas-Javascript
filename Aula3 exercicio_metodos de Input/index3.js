//Metodos para input
//
//alert('uma mensagem aleatória');
//const confirmar = confirm("escolha uma opção deseja cancelar ? ");
//const proposta = prompt("Digite o seu nome:");

//meios de captura 
let num1 = prompt("Digite um numero:")
let num2 = prompt("Digite outro numero:")

//calculo usando metodos de input e conversão de tipos de dados, de string para number 
num1 = parseFloat(num1);
num2 = parseFloat(num2);
console.log(typeof(num1,num2))
let soma = num1 + num2;
alert(soma);
