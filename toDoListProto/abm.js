const prompt = require("prompt-sync")({ sigint: true });
const { mostrarTodasLasTareas, filtrarTareasPorEstado } = require('./mostrarTareas'); 
const { AtributoEnBlanco, convertirTextoEstado, convertirTextoDificultad, validarFecha, validarInicialEstado, validarInicialDificultad, validarLongitudString, RepetirAtributo } = require('./controles');

//constructor de Tarea
function Tarea(titulo, descripcion, estado, dificultad, vencimiento, creacion) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.estado = estado;
    this.dificultad = dificultad;
    this.vencimiento = vencimiento;
    this.creacion = creacion;
}

//metodo prototipico para mostrar detalles de la tarea
Tarea.prototype.mostrarDetalles = function() {
    console.log(`   Título: ${this.titulo}`);
    console.log(`   Descripción: ${this.descripcion}`);
    console.log(`   Estado: ${this.estado}`);
    console.log(`   Dificultad: ${this.dificultad}`);
    console.log(`   Fecha de creación: ${this.creacion}`);
    console.log(`   Fecha de vencimiento: ${this.vencimiento}`);
    console.log('-----------------------');
};

//metodo prototipico para editar la tarea
Tarea.prototype.editarTarea = function() {
    console.clear();
    console.log(`Editando tarea...`);
    console.log(`IMPORTANTE\nSi no desea cambiar un dato ingrese '='\nSi desea dejarlo en blanco presione Enter...\n\n`);

    let nuevoTitulo = prompt(`Nuevo título (anterior: ${this.titulo}): `);
    nuevoTitulo = nuevoTitulo ? RepetirAtributo(nuevoTitulo, this.titulo) : this.titulo;

    let nuevaDescripcion = prompt(`Nueva descripción (anterior: ${this.descripcion}): `);
    nuevaDescripcion = nuevaDescripcion ? RepetirAtributo(AtributoEnBlanco(nuevaDescripcion), this.descripcion) : this.descripcion;

    let estado = prompt(`Nuevo estado (anterior: ${this.estado}) [P]endiente, [E]n curso, [T]erminada, [C]ancelada: `);
    estado = estado ? convertirTextoEstado(RepetirAtributo(estado, this.estado)) : this.estado;

    let dificultad = prompt(`Nueva dificultad (anterior: ${this.dificultad}) ([1] Baja, [2] Media, [3] Alta): `);
    dificultad = dificultad ? convertirTextoDificultad(RepetirAtributo(dificultad, this.dificultad)) : this.dificultad;

    let nuevoVencimiento = prompt(`Nueva fecha de vencimiento (anterior: ${this.vencimiento}): `);
    nuevoVencimiento = nuevoVencimiento ? AtributoEnBlanco(RepetirAtributo(nuevoVencimiento, this.vencimiento)) : this.vencimiento;

    this.titulo = nuevoTitulo;
    this.descripcion = nuevaDescripcion;
    this.estado = estado;
    this.dificultad = dificultad;
    this.vencimiento = nuevoVencimiento;

    console.log(`\nTarea actualizada con éxito!`);
    this.mostrarDetalles();
    prompt(`Presione una tecla para continuar...`);
};

//funcion para crear una nueva tarea y agregarla a la lista
function crearNuevaTarea(tareas) {
    console.clear();
    console.log("AGREGAR TAREA\n");

    let titulo = prompt('Título de la tarea (máx. 100 caracteres): ');
    while (!validarLongitudString(titulo, 100) || titulo === '' || titulo === '=') {
        titulo = prompt("Título inválido o vacío. Ingrese nuevamente: ");
    }

    let descripcion = prompt('Descripción de la tarea: ');
    while (!validarLongitudString(descripcion, 500)) {
        descripcion = prompt("Descripción demasiado larga. Ingrese nuevamente: ");
    }

    let estado = prompt('Estado de la tarea ([P]endiente, [E]n curso, [T]erminada, [C]ancelada): ');
    while (!validarInicialEstado(estado)) {
        estado = prompt("Entrada inválida. Ingrese una opción válida: ");
    }
    estado = convertirTextoEstado(estado);

    let dificultad = prompt('Dificultad de la tarea ([1] Baja, [2] Media, [3] Alta): ');
    while (!validarInicialDificultad(dificultad)) {
        dificultad = prompt("Entrada inválida. Ingrese una opción válida: ");
    }
    dificultad = convertirTextoDificultad(dificultad);

    let vencimiento = prompt('Fecha de vencimiento (YYYY-MM-DD): ');
    while (!validarFecha(vencimiento) && vencimiento !== '') {
        vencimiento = prompt("Fecha inválida. Ingrese una fecha válida: ");
    }
    vencimiento = AtributoEnBlanco(vencimiento);

    let creacion = prompt('Fecha de creación (YYYY-MM-DD): ');
    while (!validarFecha(creacion) && creacion !== '') {
        creacion = prompt("Fecha inválida. Ingrese una fecha válida: ");
    }
    creacion = AtributoEnBlanco(creacion);

    const nuevaTarea = new Tarea(titulo, descripcion, estado, dificultad, vencimiento, creacion);
    tareas.push(nuevaTarea);
    console.clear();
    console.log("Tarea creada con éxito");
    prompt("Presione una tecla para continuar...");
}

//funcion para ver tareas según el estado o mostrar todas
function VerMisTareas(tareas) {
    console.clear();
    let op;
    do {
        console.clear();
        console.log("MENU\n[1] Todas \n[2] Pendientes\n[3] En curso\n[4] Terminadas\n[0] Salir");
        op = parseInt(prompt("¿Qué desea hacer? : "));
        switch (op) {
            case 1:
                console.clear();
                mostrarTodasLasTareas(tareas);
                break;
            case 2:
                console.clear();
                filtrarTareasPorEstado(tareas, 'Pendiente');
                break;
            case 3:
                console.clear();
                filtrarTareasPorEstado(tareas, 'En Curso');
                break;
            case 4:
                console.clear();
                filtrarTareasPorEstado(tareas, 'Terminada');
                break;
            case 0:
                console.log("Volviendo al menú principal.");
                prompt("Presione una tecla para continuar...");
                break;
            default:
                console.log("Opción no disponible. Volviendo al menú...");
                prompt("Presione una tecla para continuar...");
                break;
        }
    } while (op != 0);
}

module.exports = { Tarea, crearNuevaTarea, VerMisTareas };
