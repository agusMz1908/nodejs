import inquirer from "inquirer";

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Que desea hacer?',
        choices: [
            {
                value: '1',
                name: '1. Ingresar Terminal'
            },
            {
                value: '2',
                name: '2. Modificar Terminal'
            },
            {
                value: '3',
                name: '3. Borrar Terminal'
            },
            {
                value: '4',
                name: '4. Listado Terminales'
            },
            {
                value: '0',
                name: '0. Salir'
            },
        ]
    }
]

const inquirerMenu = async() => {
    console.clear();
    console.log('*************************');
    console.log('* Seleccione una opcion *');
    console.log('*************************');

    const {opcion} = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    const pregunta = [
        {
            type: 'input',
            name: 'enter',
            message: 'Presione ENTER para continuar'
        }
    ];

    console.log('\n');
    await inquirer.prompt(pregunta);
}

const leerInput = async(message) => {
    const pregunta = [
        {
            type: 'input',
            name: 'numeroPos2000',
            message,
            validate(value) {
                if(value.length === 0) {
                    return 'Ingrese un valor valido'
                }
                return true
            },
        },
        {
            type: 'input',
            name: 'serie',
            message: 'Serie: ',
            validate(value) {
                if(value.length === 0) {
                    return 'Ingrese un valor valido'
                }
                return true
            },
        },
        {
            type: 'input',
            name: 'partNumber',
            message: 'Part Number: ',
            validate(value) {
                if(value.length === 0) {
                    return 'Ingrese un valor valido'
                }
                return true
            },
        },
        {
            type: 'input',
            name: 'modelo',
            message: 'Modelo: ',
            validate(value) {
                if(value.length === 0) {
                    return 'Ingrese un valor valido'
                }
                return true
            },
        },
        {
            type: 'input',
            name: 'conectividad',
            message: 'Conectividad: ',
            validate(value) {
                if(value.length === 0) {
                    return 'Ingrese un valor valido'
                }
                return true
            },
        },
        {
            type: 'input',
            name: 'cliente',
            message: 'Cliente: ',
            validate(value) {
                if(value.length === 0) {
                    return 'Ingrese un valor valido'
                }
                return true
            },
        },
    ];

    const {numeroPos2000, serie, partNumber, modelo, conectividad, cliente} = await inquirer.prompt(pregunta);
    return {
        numeroPos2000,
        serie,
        partNumber,
        modelo,
        conectividad,
        cliente
    } 
        
}

export {
    inquirerMenu,
    pausa,
    leerInput
}