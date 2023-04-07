import * as dotenv from 'dotenv'
dotenv.config()
import { leerInput, inquirerMenu, pausa, listarLugares } from './helpers/inquirer.js'
import Busquedas from './models/busquedas.js';

const main = async () => {

    const busquedas = new Busquedas();

    let opt;

    do {
        opt = await inquirerMenu()
        switch (opt) {
            case 1:
                //Mostrar mensaje
                const resultadoBusqueda = await leerInput('Ciudad: ')

                //Buscar los lugares
                const lugares = await busquedas.ciudad(resultadoBusqueda)

                //Seleccionar el lugar
                const id = await listarLugares(lugares)
                if (id === '0') continue;

                const lugarSel = lugares.find(l => l.id === id)

                //Guardar
                busquedas.agregarHistorial(lugarSel.nombre)

                //Clima
                const clima = await busquedas.climaLugar(lugarSel.latitud, lugarSel.longitud)

                const { nombre, latitud, longitud } = lugarSel
                const { temp, max, min, desc } = clima

                //Mostrar resultados
                console.log('\nInformacion de la Ciudad\n'.green)
                console.log('Ciudad:', nombre.green)
                console.log('Latitud:', latitud)
                console.log('Longitud:', longitud)
                console.log('Temperatura:', temp)
                console.log('Temperatura Max:', max)
                console.log('Temperatura Min:', min)
                console.log('Descripcion:', desc.green)
                break;

            case 2:

                busquedas.capitalizarHistorial.forEach((lugar, i) => {
                    const idx = `${i + 1}`.green
                    console.log(`${idx} ${lugar}`)
                })
                break

                break;

        }

        if (opt !== 0) await pausa();

    } while (opt !== 0)
}

main();