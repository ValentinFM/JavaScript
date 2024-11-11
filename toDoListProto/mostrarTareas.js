const prompt = require("prompt-sync")({ sigint: true });

//funcion para mostrar todas las tareas
function mostrarTodasLasTareas(tareas) {
    console.log(`Todas las tareas:`);
    tareas.forEach((tarea, index) => {
        console.log(`[${index + 1}] :  Título: ${tarea.titulo}`);
    });

    let opcion = parseInt(prompt(`Ingrese el índice de la tarea para ver detalles (0 para regresar al menú): `));
    if (opcion > 0 && opcion <= tareas.length) {
        let tareaSeleccionada = tareas[opcion - 1];
        tareaSeleccionada.mostrarDetalles();

        let editar = prompt(`¿Desea editar esta tarea? (S/N): `).toUpperCase();
        if (editar === 'S') {
            tareaSeleccionada.editarTarea();
        }
    } else if (opcion === 0) {
        console.log("Regresando al menú...");
    } else {
        console.log("Opción no válida.");
    }
}

//funcion para filtrar tareas por estado
function filtrarTareasPorEstado(tareas, estado) {
    let tareasFiltradas = tareas.filter(tarea => tarea.estado === estado);

    if (tareasFiltradas.length === 0) {
        console.log(`No hay tareas en este estado...`);
        prompt(`Presiona una tecla para volver al menú de ver tareas...`);
    } else {
        tareasFiltradas.forEach((tarea, index) => {
            console.log(`[${index + 1}] :  Título: ${tarea.titulo}`);
        });

        let opcion = parseInt(prompt(`Ingrese el índice de la tarea para ver detalles (0 para regresar al menú): `));
        if (opcion > 0 && opcion <= tareasFiltradas.length) {
            let tareaSeleccionada = tareasFiltradas[opcion - 1];
            tareaSeleccionada.mostrarDetalles();

            let editar = prompt(`¿Desea editar esta tarea? (S/N): `).toUpperCase();
            if (editar === 'S') {
                tareaSeleccionada.editarTarea();
            }
        } else if (opcion === 0) {
            console.log("Regresando al menú...");
        } else {
            console.log("Opción no válida.");
        }
    }
}

module.exports = { mostrarTodasLasTareas, filtrarTareasPorEstado };
