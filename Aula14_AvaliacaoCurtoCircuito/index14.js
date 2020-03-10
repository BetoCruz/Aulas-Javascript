/**
&& -> false && True  -> false "o valor mesmo"
|| -> Retorna o valor real , literal, verdadeiro

falsy  -> Valores que podem ser avaliados como falso, são reconhecidos como falso.

false é o valor literal .
0
 "" '' ``
null / undefined
NaN

 */
console.log('Luiz' && '' && 'Maria'); // reconhece a string vazia como falso, por não haver dados.


 // Usando OU/OR/|| ->  assim que o primeiro valor verdadeiro for encontrado para se a verificação.
 //se todos os valores forem falsos , o ultimo valor falso sera retornado.
 console.log(0|| false || null || 'BETO'|| true);

 //Se houver uma cor definida a verificação trara a primeiro valor valida. 
 const corDefinidaUsuario = 'vermelho';
 const corPadrao = corDefinidaUsuario||'preto';
 console.log(corPadrao);

 //------------ex----retorna 'false', pois é o unico valor verdadeiro:'false'--------------
 const a = 0;
 const b = null;
 const c = "'false'";
 const d = false;
 const e = NaN;
 console.log("retorna 'false', pois é o unico valor verdadeiro:" +( a || b || c || d || e));