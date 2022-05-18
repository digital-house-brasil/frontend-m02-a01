//Função antes do ES6
function saudacao1(mensagem) {
    return mensagem;
}

console.log(saudacao1('Olá mundo!'));

//Funções depois do ES6, como arrow function
const saudacao2 = (mensagem) => {
    return mensagem;
}
console.log(saudacao2('Olá mundo!'));


//Função com retorno implícito
const saudacao3 = (mensagem) => mensagem;

console.log(saudacao3('Olá mundo!'));

