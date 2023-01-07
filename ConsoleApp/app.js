const {crearArchivo} = require('./Helpers/multiplicar');
const argv = require('./config/yargs');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creada con exito'))
    .catch(error => console.log(error));

