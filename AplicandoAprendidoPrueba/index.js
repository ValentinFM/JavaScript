//IMPORTAMOS PROMPT PARA PODER INGRESAR TEXTO POR TECLADO
const prompt = require('prompt-sync')({ sigint: true });
//IMPORTAMOS MODULO DE MENU, FUNCIONESTAREA, CLASE TAREA Y CONTROLES
const { menuPrincipal, menuBuscar, menuSecundario } = require('./menu');
const { crearTarea, mostrarTodasLasTareas } = require('./funcionesTareas');
const { esperarTeclaParaContinuar } = require('./control');
const { solicitarNombre, solicitarId } = require('./solicita');
const { buscarTareaId, buscarTareaPorEstado, buscarTareaPorNombre } = require('./buscar');

const { } = require('./buscar');
///COMIENZA EL CODIGO
let tareas = [];
function ejecutarMenu() {

    switch (menuPrincipal()) {
        case 1://ver tareas
            console.clear();
            tareas.length === 0 ? console.log("No hay tareas creadas") : mostrarTodasLasTareas(tareas);
            esperarTeclaParaContinuar();
            console.clear();
            ejecutarMenu();
            break;
        case 2://buscar tarea
            switch (menuBuscar()) {
                case 1:
                    let nombre = solicitarNombre();
                    buscarTareaPorNombre(tareas, nombre);
                    break;
                case 2:
                    let Id = solicitarId();
                    buscarTareaId(Id);
                    break;
                case 3:
                    let estado = menuSecundario();
                    buscarTareaPorEstado(estado);
                    break;
            }
            ejecutarMenu();
            break;
        case 3://agregar tarea
            crearTarea(tareas);
            esperarTeclaParaContinuar();
            ejecutarMenu();
            console.clear();
            break;
        case 0:
            console.log("Saliendo del Programa\n");
            break;
        default:
            console.clear();
            console.log("ERROR, opcion incorrecta \n");
            ejecutarMenu();
            break;
    }
}
ejecutarMenu();
module.exports = { tareas };