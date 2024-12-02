//funcion para mostrar tarea
function mostrarTarea() {
    let opcion1 = menuSecundario();
    if (opcion1 != 0) {
        switch (opcion1) {
            case 1://MUESTRO TODAS
                if (arrayTarea.length > 0) {
                    console.log("Estas son todas las tareas: ");
                    arrayTarea.forEach(function (tareas) {
                        console.log(`Titulo: ${tareas.getTitulo()}`);
                    });
                }
                else {
                    console.log("No hay tareas cargadas por el momento ");
                }
                break;
            case 2://MUESTRO LAS PENDIENTES
                buscarTareaPorEstado('P');
                break;
            case 3://MUESTRO LAS EN CURSO
                buscarTareaPorEstado('E');
                break;
            case 4://MUESTRO LAS TERMINADAS
                buscarTareaPorEstado('T');
                break;
            default:
                console.log("ERROR, opcion incorrecta ");
                break;
        }
    }

}