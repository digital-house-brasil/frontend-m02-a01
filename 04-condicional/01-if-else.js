//if e else
if ('João' === 'Maria') {
    console.log('É igual');
} else {
    console.log('Não é igual');
}

//variáveis
const idade = 29;

if (idade >= 18) {
    console.log('Pode entrar');
} else {
    console.log('Não pode entrar');
}

//funções
function verificarIdades(idade) {
    if (idade >= 18) {
        return true;
    } else {
        return false;
    }
}

if(verificarIdades(29)) {
    console.log('Pode entrar');
} else {
    console.log('Não pode entrar');
}

//if, else if, else
function imc(peso, altura) {
    return peso / (altura * altura);
}

if (imc(80, 1.80) >= 30) {
    console.log('Obesidade');
} else if (imc(80, 1.80) >= 25) {
    console.log('Sobrepeso');
} else if (imc(80, 1.80) >= 18.5) {
    console.log('Peso normal');
} else {
    console.log('Abaixo do peso');
}


