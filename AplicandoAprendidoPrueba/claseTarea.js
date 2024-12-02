class Tarea {
    // Atributos de Tarea
    id;
    titulo;
    descripcion;
    estado = 'P';
    creacion;
    vencimiento;
    dificultad;
    fechaModificacion;

    // Contador privado estático
    static #contadorTarea = 1;

    // Constructor de Tarea
    constructor(titulo, descripcion, estado, dificultad, vencimiento) {
        this.id = Tarea.#contadorTarea++; // Asigna el valor actual del contador y luego lo incrementa
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
        this.creacion = new Date();
        this.vencimiento = vencimiento;
        this.dificultad = dificultad;
        this.fechaModificacion = this.creacion;
    }
    //getters
    getId() {
        return this.id;
    }
    getTitulo() {
        return this.titulo;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getEstado() {
        return this.estado;
    }

    getDificultad() {
        return this.dificultad;
    }

    getCreacion() {
        return this.creacion;
    }

    getVencimiento() {
        return this.vencimiento;
    }

    actualizarModificacion() {
        this.fechaModificacion = new Date();
    }
};
//EXPORTO FUNCIONES PARA PODER USAR EN CUALQUIER ARCHIVO
module.exports = { Tarea };