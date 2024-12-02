const { Tarea } = require('./claseTarea');
const { validarInicialDificultad, validarFecha, validarInicialEstado, AtributoEnBlanco, convertirTextoEstado, convertirTextoDificultad, RepetirAtributo, validarLongitudString } = require('./control');
const { solicitarDificultad } = require('./solicita');
//IMPORTAMOS PROMPT PARA PODER INGRESAR TEXTO POR TECLADO
const prompt = require('prompt-sync')({ sigint: true });
//funcion para crear tarea  -IMPURA-
function crearTarea(tareas) {
    console.clear();
    let estado = 'P', dificultad = '', titulo, descripcion, vencimiento, creacion;
    console.log("AGREGAR TAREA\n");

    titulo = prompt('Título de la tarea (máx. 100 caracteres): ');

    descripcion = prompt('Descripción de la tarea: ');
    validarInicialEstado(estado);
    estado = convertirTextoEstado(estado);

    dificultad = solicitarDificultad();
    dificultad = convertirTextoDificultad(dificultad);

    vencimiento = prompt('Fecha de vencimiento (YYYY-MM-DD): ');

    fechaModificacion = new Date();
    let nuevaTarea = new Tarea(titulo, descripcion, estado, dificultad, vencimiento, fechaModificacion, creacion);
    tareas.push(nuevaTarea);
    console.log("Tarea creada con éxito");
    mostrarDetallesTarea(nuevaTarea);
}

//funcion para modificar tarea
/*function modificarTarea() {

}*/

function mostrarDetallesTarea(tarea) {
    console.log("Ejecutando mostrarDetallesTarea...");
    console.log(tarea);
    console.log(`   Título: ${tarea.titulo}`);
    console.log(`   Descripción: ${tarea.descripcion}`);
    console.log(`   Estado: ${tarea.estado}`);
    console.log(`   Dificultad: ${tarea.dificultad}`);
    console.log(`   Fecha de creación: ${tarea.creacion}`);
    console.log(`   Fecha de vencimiento: ${tarea.vencimiento}`);
    console.log(`   Fecha de ultima modificacion: ${tarea.fechaModificacion}`);
}

function mostrarTodasLasTareas(tareas) {
    console.log(`Todas las tareas:`);
    tareas.forEach((tarea, index) => {
        console.log(`[${index + 1}] :  Título: ${tarea.titulo}`);
    });

    let opcion = parseInt(prompt(`Ingrese el índice de la tarea para ver detalles (0 para regresar al menú): `));
    (opcion > 0 && opcion <= tareas.length)
        ? (
            mostrarDetallesTarea(tareas[opcion - 1]),
            prompt(`¿Desea editar esta tarea? (S/N): `).toUpperCase() === 'S'
                ? editarTarea(tareas[opcion - 1])
                : null
        )
        : opcion === 0
            ? console.log(`Regresando al menú...`)
            : console.log(`Opción no válida.`);
}

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
    while (validarLongitudString(nuevaDescripcion, 500)) {
        nuevaDescripcion = prompt(`La descripción es demasiado larga. Ingrese nuevamente la descripción:`);
    }
    nuevaDescripcion = AtributoEnBlanco(nuevaDescripcion);
    nuevaDescripcion = RepetirAtributo(nuevaDescripcion, tarea.descripcion);

    // Editar el estado
    inicial = prompt(`Nuevo estado (anterior: ${tarea.estado}) [P]endiente, [E]n curso, [T]erminada, [C]ancelada: `);
    while (!validarInicialEstado(inicial) && inicial !== '=') {
        inicial = prompt(`Entrada inválida. Ingrese una opción válida ([P]endiente, [E]n curso, [T]erminada, [C]ancelada), o deje en blanco:`);
    }
    inicial === '' ? inicial = 'P' : inicial;
    inicial = RepetirAtributo(inicial, tarea.estado);
    nuevoEstado = convertirTextoEstado(inicial);

    // Editar la dificultad
    inicial = prompt(`Nueva dificultad (anterior: ${tarea.dificultad}) ([1] Baja, [2] Media, [3] Alta): `);
    while (!validarInicialDificultad(inicial) && inicial !== '=') {
        inicial = prompt(`Entrada inválida. Ingrese una opción válida ([1] Baja, [2] Media, [3] Alta): `);
    }
    inicial === '' ? inicial = '1' : inicial;
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
    tarea.fechaModificacion = new Date();

    console.log(`\n\nTarea actualizada con éxito!`);

    mostrarDetallesTarea(tarea);
}

//EXPORTO FUNCIONES PARA PODER USAR EN CUALQUIER ARCHIVO
module.exports = {
    crearTarea,
    modificarTarea,
    mostrarTodasLasTareas,
    editarTarea,
    mostrarDetallesTarea
};
