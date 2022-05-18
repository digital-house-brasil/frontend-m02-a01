//switch
function imc(peso, altura) {
    return peso / (altura * altura);
}

switch (imc(80, 1.80)) {
    case 30:
        console.log('Obesidade');
        break;
    case 25:
        console.log('Sobrepeso');
        break;
    case 18.5:
        console.log('Peso normal');
        break;
    default:
        console.log('Abaixo do peso');
        break;
}

