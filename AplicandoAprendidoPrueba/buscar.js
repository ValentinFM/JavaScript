const { mostrarDetallesTarea } = require('./funcionesTareas');
const { solicitarId, seleccionarOpcion } = require('./solicita');
const { esperarTeclaParaContinuar } = require('./control');

//funcion para buscar tarea
function buscarTareaId(tareas) {
    const idBusqueda = solicitarId();
    console.clear();
    esperarTeclaParaContinuar();
    // Buscar tarea que coincida con el ID
    let tareaFiltrada = tareas.find(tarea => tarea.id.toString() === idBusqueda);
    // Mostrar resultados
    tareaFiltrada
        ? (console.log("\nSe encontró la tarea:"),
            console.log(`ID: ${tareaFiltrada.id}`),
            console.log(`Título: ${tareaFiltrada.titulo}`),
            console.log(`Descripción: ${tareaFiltrada.descripcion}`),
            mostrarDetallesTarea(tareaFiltrada))
        : console.log("\nNo se encontró ninguna tarea con el ID proporcionado.");
}

function buscarTareaPorEstado(estado) {

    //utilizamos el metodo filter para filtrar el arrayTarea comparando el estado recibido por parametro con el estado de la tarea
    const tareasFiltradas = arrayTarea.filter((tareas) => tareas.getEstado() === estado);
    tareasFiltradas.length > 0
        ? (console.log("Las tareas encontradas son: "),
            tareasFiltradas.forEach(tarea => console.log(`Titulo: ${tarea.getTitulo()}`)))
        : console.log(`No hay tareas ${estado} cargadas`);

}
/*function buscarTareaPorTitulo(tareas) {
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
}*/
/*function buscarTareaPorNombre(nombre) {
    let arrayTarea = [];
    const resultados = arrayTarea
        .map((tareas, index) => ({ index, tareas })) // Mapea para incluir el índice
        .filter(({ tareas }) => tareas.getTitulo().toLowerCase().includes(nombre.toLowerCase())); // Filtra coincidencias

    resultados.length === 0 
    ? console.log("No hubo coincidencias con la búsqueda.") 
    
    : (console.log(`Se encontraron ${resultados.length} coincidencias en la búsqueda:`),
    resultados.forEach(({ index, tarea }) => console.log(`[${index + 1}] ${tarea.getTitulo()}`)));
    */
function buscarTareaPorNombre(tareas, nombre) {
    console.log(tareas);  // Verifica qué contiene el array tareas

    let resultados = tareas.filter(tarea => tarea && tarea.getTitulo && tarea.getTitulo().toLowerCase().includes(nombre.toLowerCase())); // Filtra coincidencias
    resultados.length === 0
        ? console.log("No hubo coincidencias con la búsqueda.")
        : (console.log(`Se encontraron ${resultados.length} coincidencias en la búsqueda:`),
            resultados.forEach((tarea) => console.log(`[${tarea.getId()}] ${tarea.getTitulo()}`)));
    seleccionarOpcion(resultados);
    return resultados;
}
//editarTarea(tareaSeleccionada); // Llama a la función editar, asegúrate de definir esta función
/*editarTarea(); // Llama a la función editar
}*/
module.exports = {
    buscarTareaId,
    buscarTareaPorEstado,
    buscarTareaPorNombre
};