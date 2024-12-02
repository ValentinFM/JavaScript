const prompt = require('prompt-sync')({ sigint: true });
const { validarInicialDificultad } = require('./control');
const { mostrarDetallesTarea } = require('./funcionesTareas');
console.log(mostrarDetallesTarea);

function solicitarId() {
    let idBusqueda = prompt("Ingrese el ID de la tarea que desea buscar: ");
    // Validar el ID usando operador ternario
    return verificarID(idBusqueda)
        ? idBusqueda
        : (console.log("El ID ingresado no es válido. Por favor, inténtalo nuevamente."),
            solicitarId());
}
function solicitarNombre() {
    let nombre = prompt("Ingrese el nombre de la tarea que desea buscar: ");
    return nombre;
}

function solicitarDificultad() {
    dificultad = prompt('Dificultad de la tarea ([1] Baja, [2] Media, [3] Alta): ');
    return validarInicialDificultad(dificultad)
        ? dificultad
        : (console.log("La dificultad ingresada no es valida. Por favor, inténtalo nuevamente."),
            solicitarDificultad());
}

function seleccionarOpcion(resultados) {
    let tareaSeleccionada, opcion, opcion2;
    opcion = parseInt(prompt("Ingrese el índice de la tarea para ver detalles (0 para regresar al menú): "));
    opcion > 0 && opcion <= resultados.length
        ? (tareaSeleccionada = resultados[opcion - 1],
            console.log("\nDetalles de la tarea selecionada"),
            mostrarDetallesTarea(tareaSeleccionada),//NO FUNCA no se pasa correctamente la funcion
            opcion2 = parseInt(prompt("¿Desea editar la tarea?S/N")),
            opcion2 === S ? editarTarea(tareaSeleccionada) : opcion = 0)
        : opcion === 0
            ? (console.log("Regresando al menú..."), null)
            : (console.log("Opción no válida."), seleccionarOpcion());
}
module.exports = {
    solicitarDificultad,
    solicitarId,
    solicitarNombre,
    seleccionarOpcion
};

