import colors from 'colors';
import Tareas from './models/tareas.js';
import {
    guardarData, 
    leerData
} from './helpers/guardarArchivo.js'
import {
    inquirerMenu, 
    pausa, 
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoCheckList
} from './helpers/inquirer.js';

console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const tareasData = leerData();

    if(tareasData) {
        //Establecer las tareas
        tareas.cargarTareasDesdeArray(tareasData);
    }

    do {
        //Imprimir el menu
        opt = await inquirerMenu();
        
        switch(opt) {
            case '1': 
                //Crear opcion
                const description = await leerInput('Descripcion:');
                tareas.crearTarea(description);
            break;

            case '2':
                //Listar todas las tareas
                tareas.listadoCompleto();
            break;

            case '3':
                //Listar solo las completadas
                tareas.listarPendientesCompletadas(true);
            break;

            case '4':
                //Listar solo las tareas incompletas
                tareas.listarPendientesCompletadas(false);
            break;

            case '5':
                //Listar solo las tareas completas
                const ids = await mostrarListadoCheckList(tareas.listadoArray);
                tareas.toggleCompletadas(ids);
            break;

            case '6':
                //Borrar tarea
                const id = await listadoTareasBorrar(tareas.listadoArray);

                //Preguntar si esta seguro
                if( id!= 0) {
                    const okBorrar = await confirmar('Estas seguro?');
                    if(okBorrar) {
                        tareas.borrarTarea(id);
                        console.log('Tarea borrada con exito!');
                    }
                }
            break;
        }

        guardarData(tareas.listadoArray);

        await pausa();
    } while (opt !== '0') {

    }
}

main();
