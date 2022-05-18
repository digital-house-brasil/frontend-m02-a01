//ternário
const nota = 7;
const resultadoNota = nota >= 7 ? 'Aprovado' : 'Reprovado'

//ternário, quando não usar
function imc(peso, altura) {
    return peso / (altura * altura);
}
const resultadoImc = imc(80, 1.80) >= 30
    ? 'Obesidade' : imc(80, 1.80) >= 25
        ? 'Sobrepeso' : imc(80, 1.80) >= 18.5
            ? 'Peso normal' : 'Abaixo do peso';




