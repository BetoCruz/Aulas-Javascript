//Exercicio para função ,Array e Objeto.
// desenvolvimento de um formulario para captura e criação de um objeto comos dados de usuarios.
//Uso de metodos de aptuar de "flags"
function meuEscopo(){
    const form = document.querySelector(".form");
    const resultado =  document.querySelector(".resultado")

    //usando o operador de atribuição feche com ";"
    //form.onsubmit = function(event){
    //    event.preventDefault(); //previne a realização do evento 
    //};

    const pessoas = [];

    function recebeEventoForm(event){
        event.preventDefault();
        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        //Um indice por objeto.
        pessoas.push({
            nome:nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value
        });
        console.log(pessoas);


        resultado.innerHTML += `
            <p><strong>Nome<strong>${nome.value}<p> 
            <P><strong>Sobrenome<strong>${sobrenome.value}<p> 
            <p><strong>Peso<strong>${peso.value}</p> 
            <p><strong>Altura<strong>${altura.value}</p>
        `;

        console.log(nome.value, sobrenome.value, peso.value, altura.value);
    
    
    }

    form.addEventListener("submit",recebeEventoForm);
}
meuEscopo();