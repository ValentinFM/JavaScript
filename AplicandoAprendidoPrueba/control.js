//PAUSA
const prompt = require('prompt-sync')({ sigint: true });
function esperarTeclaParaContinuar() {
    prompt('Presiona Enter para continuar...');
}

//CONTROLES
function AtributoEnBlanco(dato) {
    return dato === '' ? '---' : dato;
}

function RepetirAtributo(dato, datoAnterior) {
    return dato === '=' ? datoAnterior : dato;
}

function convertirTextoEstado(inicial) {
    // Mapeo de iniciales a estados
    const estados = {
        'P': 'Pendiente',
        'E': 'En Curso',
        'T': 'Terminada',
        'C': 'Cancelada',
        '': 'Pendiente'
    };
    // Convertir a mayúsculas solo si es una cadena válida, de lo contrario usa una cadena vacía
    const inicialMay = (inicial || '').toUpperCase();
    // Convertir la inicial a mayúsculas y buscar el estado
    return estados[inicialMay]; // Si no hay coincidencia, devuelve el valor original
}

function convertirTextoDificultad(inicial) {
    const dificultad = {
        '1': 'Bajo ⭐ ☆ ☆',
        '2': 'Medio ⭐ ⭐ ☆',
        '3': 'Alto ⭐ ⭐ ⭐',
    };
    return dificultad[inicial];

}

/* CHAT GPT */
function validarFecha(fecha) {
    // Expresión regular para verificar el formato YYYY-MM-DD
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

    // Verificar si cumple con el formato
    regexFecha.test(fecha) ? true : false;
    //---------- ESTA BIEN ESO?------------
    if (!regexFecha.test(fecha)) {
        return false; // Retorna false si no cumple el formato
    }

    // Intentar crear un objeto Date para verificar si es una fecha válida
    const fechaObj = new Date(fecha);
    isNaN(fechaObj.getTime()) ? false : true;
    // Comprobar si el objeto fecha es válido
    if (isNaN(fechaObj.getTime())) {
        return false; // Retorna false si la fecha no es válida
    }
    //???????????????? no entiendo esto????????????????????
    // Si pasó todas las validaciones, es una fecha válida
    return true;
}

function validarInicialEstado(inicial) {
    return (inicial.toUpperCase() === 'P' ||
        inicial.toUpperCase() === 'T' ||
        inicial.toUpperCase() === 'E' ||
        inicial.toUpperCase() === 'C' ||
        inicial === '');
}

function validarInicialDificultad(inicial) {
    return (inicial === '1' ||
        inicial === '2' ||
        inicial === '3' ||
        inicial === '=' ||
        inicial === '');
}

function validarLongitudString(dato, maxLongitud) {
    dato.length <= maxLongitud ? true : false;
}

function verificarID(idBusqueda) {
    return idBusqueda === ''
        ? (console.log("El ID no puede ser vacío."), false)
        : !validarLongitudString(idBusqueda, 100)
            ? (console.log("El ID es demasiado largo. Máximo permitido: 100 caracteres."), false)
            : true;
}
//EXPORTO FUNCIONES PARA PODER USAR EN CUALQUIER ARCHIVO
module.exports = {
    verificarID,
    esperarTeclaParaContinuar,
    validarInicialDificultad,
    AtributoEnBlanco,
    convertirTextoEstado,
    convertirTextoDificultad,
    RepetirAtributo,
    validarFecha,
    validarInicialEstado,
    validarLongitudString
};