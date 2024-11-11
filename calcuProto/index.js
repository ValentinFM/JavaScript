const prompt = require('prompt-sync')();
//clase
class Calculadora {
    constructor() {//constructor
        this.operador = '';
        this.operandos = [];
    }
    //metodo para solicitar datos
    solicitarDatos() {//solicita cantidad de operandos y el operador
        const cantNumeros = parseInt(prompt('¿Con cuantos numeros desea operar? :'));
        this.operador = prompt('Ingrese el operador (+, -, *, /) : ');
        
        for (let i = 0; i < cantNumeros; i++) {
            let numero;
            do {
                numero = parseFloat(prompt(`Ingrese el numero ${i + 1}: `));
            } while (isNaN(numero)); // validamos que el valor ingresado sea un número
            this.operandos.push(numero);
        }
    }
    //metodo para el calculo
    calcular() {//toma el operador y realiza la op en todos los num ingresados
        if (this.operandos.length === 0) {
            console.log('No hay operandos para calcular.');
            return null;
        }
        
        let resultado = this.operandos[0]; // inicializamos resultado con el primer operando

        for (let i = 1; i < this.operandos.length; i++) {
            const operando = this.operandos[i];
            switch (this.operador) {
                case '+':
                    resultado += operando;
                    break;
                case '-':
                    resultado -= operando;
                    break;
                case '*':
                    resultado *= operando;
                    break;
                case '/':
                    if (operando === 0) {
                        console.log('Error: División por cero no permitida.');
                        return null;
                    }
                    resultado /= operando;
                    break;
                default:
                    console.log('Operador no válido');
                    return null;
            }
        }
        return resultado;
    }
    //metodo ejecutar
    ejecutar() {//es el punto de entrada, llama a solicitarDAtos y a calcular
        this.solicitarDatos();
        const resultado = this.calcular();
        if (resultado !== null) {
            console.log('El resultado es: ', resultado);
        }
    }
}
//crear una instancia de la calculadora y ejecutarla
const miCalculadora = new Calculadora();
miCalculadora.ejecutar();