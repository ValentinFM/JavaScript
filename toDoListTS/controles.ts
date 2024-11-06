function AtributoEnBlanco(dato: string): string {
    if (dato === '') {
        return '---'; // Retorna el nuevo valor si está en blanco
    }
    return dato; // Retorna el dato original si no está en blanco
}

function RepetirAtributo(dato: string, datoAnterior: string): string {
    if (dato === '=') {
        return datoAnterior; // Retorna el valor anterior si el dato ingresado es '='
    }
    return dato; // Retorna el nuevo valor si no es '='
}

function convertirTextoEstado(inicial: string): string {
    let estado = inicial;
    if (inicial.toUpperCase() === "P") estado = "Pendiente";
    if (inicial.toUpperCase() === "E") estado = "En Curso";
    if (inicial.toUpperCase() === "T") estado = "Terminada";
    if (inicial.toUpperCase() === "C") estado = "Cancelada";

    return estado; // Retorna el estado convertido
}

function convertirTextoDificultad(inicial: string): string {
    let dificultad = inicial;
    if (inicial === '1') dificultad = "Bajo ⭐ ☆ ☆";
    if (inicial === '2') dificultad = "Medio ⭐ ⭐ ☆";
    if (inicial === '3') dificultad = "Alto ⭐ ⭐ ⭐";
    return dificultad; // Retorna la dificultad convertida
}

function validarFecha(fecha: string): boolean {
    // Expresión regular para verificar el formato YYYY-MM-DD
    const regexFecha = /^\d{4}-\d{2}-\d{2}$/;

    // Verificar si cumple con el formato
    if (!regexFecha.test(fecha)) {
        return false; // Retorna false si no cumple el formato
    }

    // Intentar crear un objeto Date para verificar si es una fecha válida
    const fechaObj = new Date(fecha);

    // Comprobar si el objeto fecha es válido
    if (isNaN(fechaObj.getTime())) {
        return false; // Retorna false si la fecha no es válida
    }

    // Si pasó todas las validaciones, es una fecha válida
    return true;
}

function validarInicialEstado(inicial: string): boolean {
    if (inicial !== '') {
        inicial = inicial.toUpperCase();
    }

    if (inicial === 'P' || inicial === 'T' || inicial === 'E' || inicial === 'C' || inicial === '') {
        return true;
    }
    return false;
}

function validarInicialDificultad(inicial: string): boolean {
    if (inicial !== '') {
        inicial = inicial.toUpperCase();
    }

    if (inicial === '1' || inicial === '2' || inicial === '3' || inicial === '' || inicial === '=') {
        return true;
    }
    return false;
}

function validarLongitudString(dato: string, maxLongitud: number): boolean {
    // Verifica si la longitud del dato es menor o igual a la longitud máxima permitida
    if (dato.length <= maxLongitud) {
        return true;
    }
    return false;
}

export{AtributoEnBlanco, RepetirAtributo, convertirTextoEstado, convertirTextoDificultad, validarFecha, validarInicialEstado, validarInicialDificultad, validarLongitudString};