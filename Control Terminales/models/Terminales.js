import Terminal from './Terminal.js'

class Terminales {
    _listadoTerminales = {};

    get listadoTermArray() {
        const listado = [];

        Object.keys(this._listadoTerminales).forEach( key => {
            const terminal = this._listadoTerminales[key]
            listado.push(terminal);
        })

        return listado;
    }

    constructor() {
        this._listadoTerminales = {};
    }

    crearTerminal(numeroPos2000 = '',serie = '', partNumber = '', modelo = '', conectividad = '', cliente = '', fechaIngreso = null) {
        const terminal = new Terminal(numeroPos2000, serie, partNumber, modelo, conectividad, cliente, fechaIngreso);
        this._listadoTerminales[terminal.id] = terminal;
    }
}

export default Terminales