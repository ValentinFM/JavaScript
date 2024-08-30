/*Construye una calculadora que pueda resolver las 4 operaciones básicas 
(suma, resta, multiplicación y división). 
La calculadora debe limitarse a operar con un operador y dos operandos, 
los cuales debe pedir a la persona usuaria.
**BONUS**
Modifica el código para que la calculadora pueda operar con cualquier cantidad de operandos.
*/
//const = una constante
//let = una variable
//Alumnos: Fabá Mizrahi Valentín, Rojo Facundo

const prompt = require('prompt-sync')();
let Num1 = prompt('Digite un numero: ');
let Num2 = prompt('Digite el segundo numero: ');
const Oper = prompt('Ingrese el operador que desee (suma, resta, multiplicacion, division): ');
let Resultado;
Num1=parseInt(Num1);
Num2=parseInt(Num2);
Resultado=parseFloat(Resultado)

switch (Oper){
    case "suma":
        Resultado=Num1+Num2;
        console.log(Resultado);
        break;
    case "resta":
        Resultado=Num1-Num2;
        console.log(Resultado);
        break;
    case "multiplicacion":
        Resultado=Num1*Num2;
        console.log(Resultado);
        break;
    case "division":
        Resultado=Num1/Num2;
        console.log(Resultado);
        break;
}
