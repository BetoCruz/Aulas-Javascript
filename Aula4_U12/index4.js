let varA = "A" ///B
let varB = "B"//C
let varC = "C"//A
/*
const varAconst = varA;
varA = varB;
varB = varC;
varC = varAconst;
*/


// formas de atribuição 
[varA,varB,varC] = [varB,varC,varA]
console.log(varA,varB,varC);


/*strings são indaxaveis

let umaString = "Um texto";
console.log(umaString.concat('em um lindo dia.'));
console.log(umaString  + 'em um lindo fds. ');
console.log(`${umaString} em um lindo dia.`);
*/

//-----------------------------------index , qdo definido  retorna a partir do index
console.log(umaString.indexOf("texto", 4));// retorna o index de inicio da string, retorno -1 se não encontra nada
console.log(umaString[4]);//retorna o caracter referente ao index
console.log(umaString-1);
console.log(umaString.charAt());//retorna o elemento na posição definida 
console.log(umaString.charCodeAt(6));// codigo referente a tabela ascii
console.log(umaString.concat(" ", "em", " ", "um"));//concatena strings
console.log(umaString.lastIndexOf("texto", index));//começa do final p/  começo
console.log(umaString.match(/[a-z]/g)); //retorna minuscular de a-z globalmente/de todo o contexto.
console.log(umaString.search(/[a-z]/)); //retorna o index do que foi parametrizado.
console.log(umaString.search(/x/)); //retorna o index do que foi parametrizado.
console.log(umaString.replace('um', 'outra')); //substitui o primeiro parametro pelo segundo.
console.log(umaString.replace(/r/g, '#'));// buscaglobalmente os "r" e troca por "#"
console.log(umaString.length);// Retorna a extensão da string
console.log(umaString.slice(indexInicial,indexFinal));// "fatia/separa" a string entre os index definidos 
console.log(umaString.slice( -5, -1));// busca no valor da extensão menos cindo (-5), recebe parametros de inicio e fim.
console.log(umaString.split(' ', 2 )//separa a string onde houver espaço, ou caracter definido no parametro...>
//...> o segundo paramentor defini o numero de vezes de realização da ação.
console.log(umaString.toUpperCase()); //retorna em  maiuscula.
console.log(umaString.toLowerCase());// retorna em minuscula.













console.log()
