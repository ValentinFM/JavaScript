import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

import { Tarea, crearNuevaTarea, VerMisTareas } from './abm.js';
import { buscarTareaPorTitulo } from './buscar.js';

let op: string;
let tareas: Tarea[] = []; // Usamos `Tarea[]` para tipar el array de tareas

do {
    console.clear();
    console.log("MENU\n[1] Ver mis Tareas\n[2] Buscar una Tarea\n[3] Agregar una Tarea\n[0] Salir");
    op = prompt("Ingrese la opción a realizar: ");

    switch (op) {
        case "1":
            console.clear();
            if (tareas.length === 0) {
                console.log("No hay tareas creadas");
            } else {
                VerMisTareas(tareas);
            }
            prompt("Presione una tecla para continuar...");
            break;

        case "2":
            console.clear();
            if (tareas.length === 0) {
                console.log("No hay tareas creadas");
            } else {
                buscarTareaPorTitulo(tareas);
            }
            prompt("Presione una tecla para continuar...");
            break;

        case "3":
            crearNuevaTarea(tareas);
            break;

        case "0":
            console.log("Gracias por usar la lista, hasta luego...\n");
            prompt("Presione una tecla para continuar...");
            break;

        default:
            console.clear();
            console.log("Opción no disponible\nVolviendo al menú...\n");
            prompt("Presione una tecla para continuar...");
            break;
    }
} while (op !== "0");
