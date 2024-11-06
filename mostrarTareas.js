import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });
import { AtributoEnBlanco, convertirTextoEstado, convertirTextoDificultad, RepetirAtributo, validarFecha, validarInicialDificultad, validarInicialEstado, validarLongitudString } from "./controles.js";
/* Mostrar todas las tareas */
function mostrarTodasLasTareas(tareas) {
    console.log(`Todas las tareas:`);
    tareas.forEach((tarea, index) => {
        console.log(`[${index + 1}] :  Título: ${tarea.titulo}`);
    });
    const opcion = parseInt(prompt(`Ingrese el índice de la tarea para ver detalles (0 para regresar al menú): `));
    if (opcion > 0 && opcion <= tareas.length) {
        const tareaSeleccionada = tareas[opcion - 1];
        mostrarDetallesTarea(tareaSeleccionada);
        const editar = prompt(`¿Desea editar esta tarea? (S/N): `).toUpperCase();
        if (editar === 'S') {
            editarTarea(tareaSeleccionada);
        }
    }
    else if (opcion === 0) {
        console.log(`Regresando al menú...`);
        prompt(`Presiona una tecla para continuar...`);
    }
    else {
        console.log(`Opción no válida.`);
        prompt(`Presiona una tecla para continuar...`);
    }
}
/* Mostrar detalles de una tarea */
function mostrarDetallesTarea(tarea) {
    console.log(`   Título: ${tarea.titulo}`);
    console.log(`   Descripción: ${tarea.descripcion}`);
    console.log(`   Estado: ${tarea.estado}`);
    console.log(`   Dificultad: ${tarea.dificultad}`);
    console.log(`   Fecha de creación: ${tarea.creacion}`);
    console.log(`   Fecha de vencimiento: ${tarea.vencimiento}`);
    console.log('-----------------------');
}
/* Filtrar tareas por estado */
function filtrarTareasPorEstado(tareas, estado) {
    const tareasFiltradas = tareas.filter(tarea => tarea.estado === estado);
    if (tareasFiltradas.length === 0) {
        console.log(`No hay tareas en este estado...`);
        prompt(`Presiona una tecla para volver al menú de ver tareas...`);
    }
    else {
        tareasFiltradas.forEach((tarea, index) => {
            console.log(`[${index + 1}] :  Título: ${tarea.titulo}`);
        });
        const opcion = parseInt(prompt(`Ingrese el índice de la tarea para ver detalles (0 para regresar al menú): `));
        if (opcion > 0 && opcion <= tareasFiltradas.length) {
            const tareaSeleccionada = tareasFiltradas[opcion - 1];
            console.log(`\nDetalles de la tarea seleccionada:`);
            mostrarDetallesTarea(tareaSeleccionada);
            const editar = prompt(`¿Desea editar esta tarea? (S/N): `).toUpperCase();
            if (editar === 'S') {
                editarTarea(tareaSeleccionada);
            }
        }
        else if (opcion === 0) {
            console.log(`Regresando al menú...\n`);
        }
        else {
            console.log(`Opción no válida.`);
        }
    }
}
/* Editar una tarea */
function editarTarea(tarea) {
    console.clear();
    console.log(`Editando tarea...`);
    console.log(`IMPORTANTE\nSi no desea cambiar un dato ingrese '='\nSi desea dejarlo en blanco presione Enter...\n\n`);
    let nuevoTitulo = ``, nuevaDescripcion = ``, nuevoEstado = ``, nuevaDificultad = ``, nuevoVencimiento = ``, inicial = ``;
    // Editar el título
    nuevoTitulo = prompt(`Nuevo título (anterior: ${tarea.titulo}): `);
    while (nuevoTitulo === '') {
        nuevoTitulo = prompt(`El título no puede estar vacío. Ingrese un título:`);
    }
    nuevoTitulo = RepetirAtributo(nuevoTitulo, tarea.titulo);
    // Editar la descripción
    nuevaDescripcion = prompt(`Nueva descripción (anterior: ${tarea.descripcion}): `);
    while (!validarLongitudString(nuevaDescripcion, 500)) {
        nuevaDescripcion = prompt(`La descripción es demasiado larga. Ingrese nuevamente la descripción:`);
    }
    nuevaDescripcion = AtributoEnBlanco(nuevaDescripcion);
    nuevaDescripcion = RepetirAtributo(nuevaDescripcion, tarea.descripcion);
    // Editar el estado
    inicial = prompt(`Nuevo estado (anterior: ${tarea.estado}) [P]endiente, [E]n curso, [T]erminada, [C]ancelada: `);
    while (!validarInicialEstado(inicial) && inicial !== '=') {
        inicial = prompt(`Entrada inválida. Ingrese una opción válida ([P]endiente, [E]n curso, [T]erminada, [C]ancelada), o deje en blanco:`);
    }
    if (inicial === '') {
        inicial = 'p';
    }
    inicial = RepetirAtributo(inicial, tarea.estado);
    nuevoEstado = convertirTextoEstado(inicial);
    // Editar la dificultad
    inicial = prompt(`Nueva dificultad (anterior: ${tarea.dificultad}) ([1] Baja, [2] Media, [3] Alta): `);
    while (!validarInicialDificultad(inicial) && inicial !== '=') {
        inicial = prompt(`Entrada inválida. Ingrese una opción válida ([1] Baja, [2] Media, [3] Alta): `);
    }
    if (inicial === '') {
        inicial = '1';
    }
    inicial = RepetirAtributo(inicial, tarea.dificultad);
    nuevaDificultad = convertirTextoDificultad(inicial);
    // Editar la fecha de vencimiento
    nuevoVencimiento = prompt(`Nueva fecha de vencimiento (anterior: ${tarea.vencimiento}): `);
    while (!validarFecha(nuevoVencimiento) && nuevoVencimiento !== '' && nuevoVencimiento !== '=') {
        nuevoVencimiento = prompt(`Fecha inválida. Ingrese una fecha válida en formato YYYY-MM-DD.`);
    }
    nuevoVencimiento = AtributoEnBlanco(nuevoVencimiento);
    nuevoVencimiento = RepetirAtributo(nuevoVencimiento, tarea.vencimiento);
    // Actualizar la tarea
    tarea.titulo = nuevoTitulo;
    tarea.descripcion = nuevaDescripcion;
    tarea.estado = nuevoEstado;
    tarea.dificultad = nuevaDificultad;
    tarea.vencimiento = nuevoVencimiento;
    console.log(`\n\nTarea actualizada con éxito!`);
    mostrarDetallesTarea(tarea);
    prompt(`Presione una tecla para continuar...`);
}
export { filtrarTareasPorEstado, mostrarTodasLasTareas, mostrarDetallesTarea };
