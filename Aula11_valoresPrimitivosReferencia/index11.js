// * PRimitivos (imutaveis) - string, number, number, boolean, undefined, null (bigint,symbol) - valor são copiados.
let f = "A";
let g = f; //copia ,uma vex copiado o valor de "g" eindepende do valor de "f".
console.log(f,g);
f = 'outra coisa';
console.log(f,g);



 
// * Referencia (mutavel) - array , objeto, function - passados por referencia./se refenrenciam.
// "b" aponta para o mesmo valor que "a" na memoria, a add, ou retirada em um não afeta o valor do outro.
let a = [1,2,3];

//let b = a;  //b referencia o mesmo valor de a na memoria .

let b = [...a]; //Nesse caso o valor de "a" é copiado para "b" e o valor de "b" passa a ser independente de "a".
let c =b;  // c segue a referencia do "b" que uma copia de "a" e não apenas uma referencia à memoria
console.log(a,b);

a.push(4);
console.log(a,b);

b.pop();
console.log(a,b);

a.push('Luiz');
console.log(c);

//O mesmo para objetos 
const x  = {
    nome: "Luis",
    sobrenome: "Otavio"
};
const y = {...x};//cria se uma copia de a em b,

//const y = x; // afeta os dois valores pois referencia na memoria;

x.nome = "joão";
console.log(x); // "b" sofrerá a mesma alteração , pois faz referencia  amemoria .
console.log(y); 



