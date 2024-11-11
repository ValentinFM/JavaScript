const prompt = require("prompt-sync")({ sigint: true });
//importaciones
const { crearNuevaTarea, VerMisTareas } = require('./abm');
const { buscarTareaPorTitulo } = require('./buscar');

let op;
let tareas = [];

do {
    console.clear();
    console.log("MENU\n[1] Ver mis Tareas\n[2] Buscar una Tarea\n[3] Agregar una Tarea\n[0] Salir");
    op = parseInt(prompt("Ingrese la opción a realizar: "));

    switch (op) {
        case 1:
            console.clear();
            tareas.length === 0 ? console.log("No hay tareas creadas") : VerMisTareas(tareas);
            prompt("Presione una tecla para continuar...");
            break;

        case 2:
            console.clear();
            tareas.length === 0 ? console.log("No hay tareas creadas") : buscarTareaPorTitulo(tareas);
            prompt("Presione una tecla para continuar...");
            break;

        case 3:
            crearNuevaTarea(tareas);
            break;

        case 0:
            console.log("Gracias por usar la lista, hasta luego...");
            prompt("Presione una tecla para continuar...");
            break;

        default:
            console.clear();
            console.log("Opción no disponible\nVolviendo al menú...\n");
            prompt("Presione una tecla para continuar...");
            break;
    }
} while (op != 0);
