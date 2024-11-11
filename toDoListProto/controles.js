function AtributoEnBlanco(dato) {
    return dato === '' ? '---' : dato;
}

function RepetirAtributo(dato, datoAnterior) {
    return dato === '=' ? datoAnterior : dato;
}

function convertirTextoEstado(inicial) {
    const estado = inicial.toUpperCase();
    return estado === "P" ? "Pendiente" :
        estado === "E" ? "En Curso" :
            estado === "T" ? "Terminada" :
                estado === "C" ? "Cancelada" : estado;
}

function convertirTextoDificultad(inicial) {
    return inicial === '1' ? "Bajo ⭐ ☆ ☆" :
        inicial === '2' ? "Medio ⭐ ⭐ ☆" :
            inicial === '3' ? "Alto ⭐ ⭐ ⭐" : inicial;
}

function validarFecha(fecha) {
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;
    if (!regexFecha.test(fecha)) return false;

    const fechaObj = new Date(fecha);
    return !isNaN(fechaObj.getTime());
}

function validarInicialEstado(inicial) {
    return ['P', 'E', 'T', 'C', ''].includes(inicial.toUpperCase());
}

function validarInicialDificultad(inicial) {
    return ['1', '2', '3', '', '='].includes(inicial.toUpperCase());
}

function validarLongitudString(dato, maxLongitud) {
    return dato.length <= maxLongitud;
}

module.exports = { AtributoEnBlanco, RepetirAtributo, convertirTextoEstado, convertirTextoDificultad, validarFecha, validarInicialEstado, validarInicialDificultad, validarLongitudString };
