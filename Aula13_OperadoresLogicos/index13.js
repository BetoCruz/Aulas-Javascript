/**
    Operadores Lógicos
    && -> AND -> E   -> Toda as expressoes precisam ser verdadeiras 
    || -> OU -> OU   -> Pelo menos uma expressão deve ser verdadeira.
    ! -> NOT -> NÂO  -> Nega os valores existentes

 */
//----------------Operador AND -------------------
 console.log(true && true && false);
 console.log(true && true);
 const usuario  = "Paulo";
 const senha = 12345;
 const vaiLogar = usuario === 'Paulo' && senha === 1236;
 console.log("usuario logou?" + vaiLogar);


//-----------Operador OR----------------------------
 console.log(true || true);
 console.log(true || false);
 console.log(false || false);

//----------------Operador NOT----------------------
 console.log("negando:"+ !true );
 console.log("negando:"+ !true && true && !true );

 // Negando duas vez nega-se  propria negação, como no exemplo: "!!true = false e false é true"
 console.log(!!true ); 
