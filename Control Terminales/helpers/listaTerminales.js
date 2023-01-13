import fs from 'fs';

const archivo = './db/listaTerminales.json';

const guardarData = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerData = () => {
    if(!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'}); //No regresa los bytes
    const data = JSON.parse(info);

    return data;
}

export {
    guardarData,
    leerData
}
