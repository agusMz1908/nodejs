import Terminal from './Terminal.js'

class Terminales {
    _listadoTerminales = {};

    constructor() {
        this._listadoTerminales = {};
    }

    crearTerminal(numeroPos2000 = '') {
        const terminal = new Terminal(numeroPos2000);
        this._listadoTerminales[terminal.id] = terminal;
    }
}

export default Terminales