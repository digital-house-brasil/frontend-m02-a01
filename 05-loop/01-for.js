//for incremento, do 1 até 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//for decremento, do 10 até 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//for break, vai contar até 4
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log('finalizou');
        break;
    }
    console.log(i);
}

//for com continue, vai contar até 4
for (let i = 1; i <= 10; i++) {
    if (i < 5) {
        console.log(i);
        continue;
    }
    console.log('finalizou');
    break;
}

//for com array 
const nomes = ['João', 'Maria', 'José'];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

