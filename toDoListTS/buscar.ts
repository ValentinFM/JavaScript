import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

import { Tarea } from './abm.js';
import { mostrarDetallesTarea } from './mostrarTareas.js';



function buscarTareaPorTitulo(tareas: Tarea[]) {
    console.log("BUSCAR TAREA POR TÍTULO");
    const tituloBuscado = prompt('Ingrese el título de la tarea que desea buscar: ');
    const tareaEncontrada = tareas.find(tarea => tarea.titulo === tituloBuscado);

    if (tareaEncontrada) {
        console.log("Tarea encontrada:");
        mostrarDetallesTarea(tareaEncontrada);
    } else {
        console.log("No se encontró ninguna tarea con ese título.");
    }
}

export{buscarTareaPorTitulo};