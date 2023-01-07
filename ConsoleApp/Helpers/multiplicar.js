const fs = require('fs');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {    
        let salida = '';
        
        for(i = 1; i <= hasta; i ++) {
            if(i < hasta) {
                salida += `${base} x ${i} = ${base * i}\n`;
            } else {
                salida += `${base} x ${i} = ${base * i}`;
            }
        }
        
        if(listar) {
            console.log('=======================');
            console.log('     Tabla del:', base  );
            console.log('=======================');
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`

        } catch (error) {
            throw error
        }
    }

module.exports = {
    crearArchivo
}