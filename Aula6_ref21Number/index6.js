//Manipulando Numeros em Javascript.
//Essa aula tem como objetivo treinar alguns metodos relacionados a Number

let num1 = 10.7568758365873645863;
let num2 = 2.5; //number

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; //1.0
num1 += num2; //1.1
num1 += num2; //1.2
num1 += num2; //1.3
num1 += num2; //1.4
num1 += num2; //1.5
num1 += num2; //1.6
num1 += num2; //1.7

//num1 = ((num1*100)+(num2*100))/100; //mecanismo para "aredondar os resultado". 

num1 = parseFloat(num1.toFixed(2));//Essa seria a melhor forma de contornar a imprecisão de resultados.
// ou num1 = Number(num1.toFixed(2)) 

console.log(num1.toFixed(2));
console.log(Number.isInteger(num1));

//console.log(num1.toString()+num2); //concatena a conversão de num1 p/ string com o number num2.

//num1 = num1.toString(); //agora a variavel num1 foi alterada para strings.

//console.log(num1.toString(2)); //retorna o valor em binario.

//console.log(num1.toFixed(2)); //apresenta o number com 2 casas decimais definidas no parametro.

//console.log(Number.isInteger(num1)); //retorna se o number é um inteiro, ou não

//let temp = num1*'5';
//console.log(Number.isNaN(temp)); // retorna se a variavel é um numero , ou não.
