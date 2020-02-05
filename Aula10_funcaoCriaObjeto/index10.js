//-------------------------funcao criadora de objeto--------------------------
function criaPessoa(nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
//---------------------------objeto aleatorio --------------------------
function criarIndividuo(codename1, codename2, idade){
    return {codename1,codename2,idade};   
};

//-----------------variavel armazenando objeto e metodos---------------
const conversar = {
    nome:'Humberto',
    sobrenome:'Cruz',
    age: '39',

    falar(){
        console.log(`${this.nome} ${this.sobrenome} possui a idade: ${this.age}`)
    },
    
    incrementarIdade(){
       this.age++;
    }
};
//De dentro do Objeto conversar invocamos o metodo falar() e incrementarIdade() .
conversar.falar();// 
conversar.incrementarIdade();
conversar.falar();
conversar.incrementarIdade();

//-----------------chamanado dados dos objetos --------------------------

const individuo = criarIndividuo('Beto', 'Cruz', '120');
console.log(individuo.codename1);

const pessoa1 = criaPessoa('Humberto', 'Almeida', '39');
const pessoa2 = criaPessoa('Albert', 'Almeida', '45');
const pessoa3 = criaPessoa('jhon', 'Wick', '50');
const pessoa4 = criaPessoa('Escarlet', 'viuvaNegra', '35');
const pessoa5 = criaPessoa('Rock', 'Jonshon', '50');

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);
