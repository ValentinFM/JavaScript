const prompt = require('prompt-sync')({ sigint: true });
const { validarLongitudString } = require('./controles');
const { mostrarDetallesTarea } = require('./mostrarTareas');

// Función para buscar tareas por título
function buscarTareaPorTitulo(tareas) {
    let textoBusqueda = prompt("Ingrese el título o palabra clave de la tarea que desea buscar: ").toLowerCase();
    while (textoBusqueda === '') {
        textoBusqueda = prompt("'El título no puede ser vacío!. Ingrese un título: ");
    }

    validarLongitudString(textoBusqueda, 100);

    // Filtrar tareas que contengan el texto de búsqueda en su título
    let tareasFiltradas = tareas.filter(tarea => tarea.titulo.toLowerCase().includes(textoBusqueda));

    // Verificar si hay resultados
    if (tareasFiltradas.length > 0) {
        console.log(`\nSe encontraron ${tareasFiltradas.length} tarea(s) que coinciden con la búsqueda:`);

        tareasFiltradas.forEach((tarea, index) => {
            console.log(`\nTarea ${index + 1}:`);
            console.log(`Título: ${tarea.titulo}`);
        });

        let opcion = parseInt(prompt("Ingrese el índice de la tarea para ver detalles (0 para regresar al menú): "));

        if (opcion > 0 && opcion <= tareasFiltradas.length) {
            let tareaSeleccionada = tareasFiltradas[opcion - 1];
            console.log("\nDetalles de la tarea seleccionada:");
            mostrarDetallesTarea(tareaSeleccionada);
        } else if (opcion === 0) {
            console.log("Regresando al menú...");
        } else {
            console.log("Opción no válida.");
        }
    } else {
        console.log("\nNo se encontraron tareas que coincidan con el criterio de búsqueda.");
    }
}
module.exports = { buscarTareaPorTitulo };
