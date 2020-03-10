//Utilizando o objeto Math e seus metodos

let num1 = 9;
let num2Floor = Math.floor(num1);//aredonda o numero para baixo.
let num2Ceil = Math.ceil(num1)//aredonda o numero para cima.
let num2Round = Math.round(num1);//aredonda para o numero mais proximo + ou - que 5.
let num2max = Math.max(1,2,3,4, -10,1500,9,8,33,);//retorna o maior numero;
let numRandom = Math.random() * (10 - 5);//retorno um numero aleatorio, qdo definido o "range " -->
//--> taz numeros dentro de um intervalo
let numRoundRandom = Math.round(Math.random() * (15 - 10)+10);//Retorna numero aleatorio aredondado entre 10 e 15!
let numPow = Math.pow(2,10);//potenciação , eleva o parametro 1 ou parametro 2.  (2**10)
let numRaiz = (num1 **(1/2));  // ou num1 ** 0.5// Retorna raiz 2.


console.log(num2Floor);
console.log(num2Ceil);
console.log(num2Round);
console.log(num2max);
console.log(numRandom);
console.log(numRoundRandom);
console.log(numPow);
console.log(numRaiz);
console.log(100/0); 
console.log(!!(100/0)); 
