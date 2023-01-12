import { v4 as uuidv4 } from 'uuid';

class Terminal {
    id = '';
    numeroPos2000 = '';
    serie = '';
    partNumber = '';
    modelo = '';
    conectividad = '';
    cliente = '';
    fechaIngreso = null;

    constructor(numeroPos2000, serie, partNumber, modelo, conectividad, cliente, fechaIngreso) {
        this.id = uuidv4();
        this.numeroPos2000 = numeroPos2000;
        this.serie = serie;
        this.partNumber = partNumber;
        this.modelo = modelo;
        this.conectividad = conectividad;
        this.cliente = cliente;
        this.fechaIngreso = fechaIngreso;
    }
}

export default Terminal