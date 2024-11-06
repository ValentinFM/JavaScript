import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

import { filtrarTareasPorEstado, mostrarTodasLasTareas, mostrarDetallesTarea } from './mostrarTareas.js';
import { AtributoEnBlanco, convertirTextoEstado, convertirTextoDificultad, validarFecha, validarInicialEstado, validarInicialDificultad, validarLongitudString } from './controles.js';


class Tarea {
    titulo: string;
    descripcion: string;
    estado: string;
    dificultad: string;
    vencimiento: string;
    creacion: string;

    constructor(titulo: string, descripcion: string, estado: string, dificultad: string, vencimiento: string, creacion: string) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.dificultad = dificultad;
        this.vencimiento = vencimiento;
        this.creacion = creacion;
    }
}

function crearNuevaTarea(tareas: Tarea[]) {
    console.clear();
    let estado = '', dificultad = '';
    console.log("AGREGAR TAREA\n");

    let titulo = prompt('Título de la tarea (máx. 100 caracteres): ');
    while (!validarLongitudString(titulo, 100)) {
        titulo = prompt("El título es demasiado largo. Ingrese nuevamente una descripción: ");
    }

    while (titulo === '' || titulo === '=') {
        titulo = prompt("El título no puede estar vacío. Ingrese un título: ");
    }

    let descripcion = prompt('Descripción de la tarea: ');
    while (!validarLongitudString(descripcion, 500)) {
        descripcion = prompt("La descripción es demasiado larga. Ingrese nuevamente la descripción: ");
    }

    console.log("Estado de la tarea (solo inicial)");
    estado = prompt('([P]endiente / [E]n curso, [T]erminada / [C]ancelada): ');
    while (!validarInicialEstado(estado)) {
        estado = prompt("Entrada inválida. Ingrese una opción válida ([P]endiente, [E]n curso, [T]erminada, [C]ancelada): ");
    }
    estado = estado === '' ? 'Pendiente' : convertirTextoEstado(estado);

    dificultad = prompt('Dificultad de la tarea ([1] Baja, [2] Media, [3] Alta): ');
    while (!validarInicialDificultad(dificultad)) {
        dificultad = prompt("Entrada inválida. Ingrese una opción válida ([1] Baja, [2] Media, [3] Alta): ");
    }
    dificultad = dificultad === '' ? 'Baja' : convertirTextoDificultad(dificultad);

    let vencimiento = prompt('Fecha de vencimiento (YYYY-MM-DD): ');
    while (!validarFecha(vencimiento) && vencimiento !== '') {
        vencimiento = prompt("Fecha inválida. Ingrese una fecha válida en formato YYYY-MM-DD.");
    }
    vencimiento = AtributoEnBlanco(vencimiento);

    let creacion = prompt('Fecha de creación (YYYY-MM-DD): ');
    while (!validarFecha(creacion) && creacion !== '') {
        creacion = prompt("Fecha inválida. Ingrese una fecha válida en formato YYYY-MM-DD.");
    }
    creacion = AtributoEnBlanco(creacion);

    const nuevaTarea = new Tarea(titulo, descripcion, estado, dificultad, vencimiento, creacion);
    tareas.push(nuevaTarea);
    console.clear();
    console.log("Tarea creada con éxito");
    mostrarDetallesTarea(nuevaTarea);
    prompt("Presione una tecla para continuar...");
}

function VerMisTareas(tareas: Tarea[]) {
    console.clear();
    let op: string;
    do {
        console.clear();
        console.log("MENU\n[1] Todas \n[2] Pendientes\n[3] En curso\n[4] Terminadas\n[0] Salir");
        op = prompt("¿Qué desea hacer? : ");
        switch (op) {
            case "1":
                console.clear();
                mostrarTodasLasTareas(tareas);
                break;
            case "2":
                console.clear();
                filtrarTareasPorEstado(tareas, 'Pendiente');
                break;
            case "3":
                console.clear();
                filtrarTareasPorEstado(tareas, 'En Curso');
                break;
            case "4":
                console.clear();
                filtrarTareasPorEstado(tareas, 'Terminada');
                break;
            case "0":
                console.log("Volviendo al menú principal.");
                prompt("Presione una tecla para continuar...");
                break;
            default:
                console.log("Opción no disponible. Volviendo al menú...");
                prompt("Presione una tecla para continuar...");
                break;
        }
    } while (op !== "0");
}

export {Tarea, crearNuevaTarea, VerMisTareas};