const prompt = require('prompt-sync')({ sigint: true });

function buscarTareaPorTitulo(tareas) {
    let textoBusqueda = prompt("Ingrese el título o palabra clave de la tarea que desea buscar: ").toLowerCase();
    while (textoBusqueda === '') {
        textoBusqueda = prompt("El título no puede ser vacío! Ingrese un título: ");
    }

    let tareasFiltradas = tareas.filter(tarea => tarea.titulo.toLowerCase().includes(textoBusqueda));

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
            tareaSeleccionada.mostrarDetalles();

            let editar = prompt("¿Desea editar esta tarea? (S/N): ").toUpperCase();
            if (editar === 'S') {
                tareaSeleccionada.editarTarea();
            }
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
