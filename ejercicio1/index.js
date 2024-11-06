/*Construye una calculadora que pueda resolver las 4 operaciones básicas 
(suma, resta, multiplicación y división). 
La calculadora debe limitarse a operar con un operador y dos operandos, 
los cuales debe pedir a la persona usuaria.
**BONUS**
Modifica el código para que la calculadora pueda operar con cualquier cantidad de operandos.
*/
//const = una constante
//let = una variable
//sonarlint o errorlens

const prompt = require('prompt-sync')();
let arregloNumeros = [];
let cantNumeros = prompt('Con cuantos numeros desea operar? :');
console.log('El orden de ingreso sera el orden en que se operen');

const Oper = prompt('Ingrese el operador que desee para realizar la cuenta (+, -, *, /): ');

for (let i = 0; i < cantNumeros; i++) {
    let numero = prompt(`Ingrese el número ${i + 1}: `);
    while (numero === '') {
        numero = prompt(`Ingrese nuevamente el número ${i + 1}: `);
    }
    arregloNumeros[i] = parseFloat(numero);
}
for (let i = 0; i < cantNumeros; i++) {
    console.log('Los numeros ingresados son: ', arregloNumeros[i]);
}


let Resultado = arregloNumeros[0];

for (let i = 1; i < cantNumeros; i++) {
    if (Oper === '/' && arregloNumeros[i] === 0) {
        console.log('Error: División por cero no permitida.');
        return;
    }
    switch (Oper) {
        case '+':
            Resultado += arregloNumeros[i];
            break;
        case '-':
            Resultado -= arregloNumeros[i];
            break;
        case '*':
            Resultado *= arregloNumeros[i];
            break;
        case '/':
            Resultado /= arregloNumeros[i];
            break;
        default:
            console.log('Operador no válido');
            return;
    }
}

console.log('El resultado es: ', Resultado);
