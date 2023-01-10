import Tarea from "./tarea.js";

class Tareas {
    _listado = {};

    get listadoArray() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        })

        return listado;
    }

    constructor() {
        this._listado = {};
    }

    borrarTarea(id= '') {
        if(this._listado[id]) {
            delete this._listado[id];
        }
    }

    cargarTareasDesdeArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    crearTarea(desc = '') {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        this.listadoArray.forEach((tarea, i) => {
            const idx = `${i + 1}`.green;
            const {description, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;

            console.log(`${idx} - ${description} :: ${estado}`);
        });
    }

    listarPendientesCompletadas(completadas = true, tarea) {
        let contador = 0;

        this.listadoArray.forEach(tarea => {
            const {description, completadoEn} = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;

            if(completadas) {
                //Mostrar Completadas
                if(completadoEn) {
                    contador += 1;
                    console.log(`${contador.toString().green} - ${description} :: ${completadoEn.green}`);
                }
            } else {
                //Mostrar Pendientes
                if(!completadoEn) {
                    contador += 1;
                    console.log(`${contador.toString().green} - ${description} :: ${estado}`);
                }
            }
        });
    }

    toggleCompletadas(ids = []) {
        ids.forEach(id => {
            const tarea = this._listado[id];
            if(!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArray.forEach(tarea => {
            if(!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        })
    }
}

export default Tareas;