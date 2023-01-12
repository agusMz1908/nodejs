import { inquirerMenu, pausa, leerInput } from "./helpers/inquirer.js";
import Terminal from "./models/Terminal.js";
import Terminales from "./models/Terminales.js";

const main = async () => {
    let opcion = '';

    const terminales = new Terminales();

    do {
        opcion = await inquirerMenu();
        
        switch (opcion) {
            case '1':
                const inputs = await leerInput('Numero Pos2000: ');
                terminales.crearTerminal(inputs);
                break;

            case '4':
                console.log(terminales._listadoTerminales);
            break; 
        }

        await pausa();

    } while (opcion !== '0');
}

main();