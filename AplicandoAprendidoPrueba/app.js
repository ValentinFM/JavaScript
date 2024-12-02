const express = require('express');
const app = express();
const modulePath = './miModulo'; // Ruta del módulo que quieres recargar

// Función para recargar el módulo
function reloadModule(modulePath) {
    const resolvedPath = require.resolve(modulePath);
    delete require.cache[resolvedPath];
    const module = require(modulePath);
    console.log('Módulo recargado');
    return module;
}

// Ruta que recarga el módulo
app.get('/reload', (req, res) => {
    const miModulo = reloadModule(modulePath);
    res.send('Módulo recargado');
});

// Resto de tu aplicación
app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
