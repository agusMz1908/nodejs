import fs from 'fs';

const archivo = './data/equipos.json';

const guardarData = (data) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerData = () => {
    if(!fs.existsSync(archivo)) {
        return null;
    }

    const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
    const data = JSON.parse(info);

    return data;
}

export {
    guardarData,
    leerData
}