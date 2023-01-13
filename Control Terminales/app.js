import { 
    inquirerMenu, 
    pausa, 
    leerInput } from "./helpers/inquirer.js";
import {guardarData, leerData} from "./helpers/listaTerminales.js";
import Terminales from "./models/Terminales.js";

const main = async () => {
    let opcion = '';

    const terminales = new Terminales();

    const terminalesData = leerData();

    if(terminalesData) {
        //Establecer las terminales
        
    }

    await pausa();

    do {
        opcion = await inquirerMenu();
        
        switch (opcion) {
            case '1':
                const {numeroPos2000, serie, partNumber, modelo, conectividad, cliente, fechaIngreso} = await leerInput('Numero Pos2000: ');
                terminales.crearTerminal(numeroPos2000, serie, partNumber, modelo, conectividad, cliente, fechaIngreso);
                break;

            case '4':
                console.log(terminales.listadoTermArray);
            break; 
        }

        guardarData(terminales.listadoTermArray);

        await pausa();

    } while (opcion !== '0');
}

main();