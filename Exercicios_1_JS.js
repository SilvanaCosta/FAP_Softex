let num1 = prompt('Digite o primeiro valor:');
let num2 = prompt('Digite o segundo valor:');
let operacao = prompt('Qual operação deseja realizar: (+, -, *, /)');

let resultado;

if (operacao === '+'){
    resultado = num1 + num2;
    console.log("O resultado é: " + resultado);
} else if (operacao === '-'){
    resultado = num1 - num2;
    console.log("O resultado é: " + resultado);
} else if (operacao === '*'){
    resultado = num1 * num2;
    console.log("O resultado é: " + resultado);
} else if (operacao === '/'){
    resultado = num1 / num2;
    let resto = num1 % num2;
    console.log("O resultado é: " + resultado);
    console.log("o resto da divisáo é: " + resto);
} else{
    console.log ("Operação inválida!")
}