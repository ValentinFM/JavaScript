//IMPORTAMOS PROMPT PARA PODER INGRESAR TEXTO POR TECLADO
const prompt = require('prompt-sync')({ sigint: true });
//funciones de Menu (principal, secundario, editar)
function menuPrincipal() {
    console.log("MENU\n[1] Ver mis Tareas\n[2] Buscar por:\n[3] Agregar una Tarea\n[0] Salir");
    let opcion = parseInt(prompt("Ingrese la opcion: "));
    return opcion;
}

function menuSecundario() {
    console.log("MENU\n[1] Todas \n[2] Pendientes\n[3] En curso\n[4] Terminadas\n[0] Salir");
    let opcion1 = parseInt(prompt("Ingrese la opcion:"));
    return opcion1;
}

function menuEditar() {
    console.log("MENU\n[1] Editar Titulo \n[2] Editar descripcion \n[3] Editar estado \n[4] Editar dificultad \n[0] Salir");
    let opcion2 = parseInt(prompt("Ingrese la opcion:"));
    return opcion2;
}
function menuBuscar() {
    console.log("MENU\n[1] Nombre \n[2] ID \n[3] Estado\n[0] Salir");
    let opcion3 = parseInt(prompt("Ingrese la opcion:"));
    return opcion3;
}
//EXPORTO FUNCIONES PARA PODER USAR EN CUALQUIER ARCHIVO
module.exports = {
    menuPrincipal,
    menuSecundario,
    menuEditar,
    menuBuscar
};